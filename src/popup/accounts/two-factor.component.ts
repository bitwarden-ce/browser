import {
    ChangeDetectorRef,
    Component,
    NgZone,
} from '@angular/core';

import { Router } from '@angular/router';

import { TwoFactorProviderType } from '@bytegarden/jslib/src/enums/twoFactorProviderType';

import { ApiService } from '@bytegarden/jslib/src/abstractions/api.service';
import { AuthService } from '@bytegarden/jslib/src/abstractions/auth.service';
import { EnvironmentService } from '@bytegarden/jslib/src/abstractions/environment.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';
import { StateService } from '@bytegarden/jslib/src/abstractions/state.service';
import { StorageService } from '@bytegarden/jslib/src/abstractions/storage.service';
import { SyncService } from '@bytegarden/jslib/src/abstractions/sync.service';

import { BroadcasterService } from '@bytegarden/jslib/src/angular/services/broadcaster.service';

import { TwoFactorComponent as BaseTwoFactorComponent } from '@bytegarden/jslib/src/angular/components/two-factor.component';

import { PopupUtilsService } from '../services/popup-utils.service';

const BroadcasterSubscriptionId = 'TwoFactorComponent';

@Component({
    selector: 'app-two-factor',
    templateUrl: 'two-factor.component.html',
})
export class TwoFactorComponent extends BaseTwoFactorComponent {
    showNewWindowMessage = false;

    constructor(authService: AuthService, router: Router,
        i18nService: I18nService, apiService: ApiService,
        platformUtilsService: PlatformUtilsService, syncService: SyncService,
        environmentService: EnvironmentService, private ngZone: NgZone,
        private broadcasterService: BroadcasterService, private changeDetectorRef: ChangeDetectorRef,
        private popupUtilsService: PopupUtilsService, stateService: StateService,
        storageService: StorageService) {
        super(authService, router, i18nService, apiService, platformUtilsService, window, environmentService,
            stateService, storageService);
        super.onSuccessfulLogin = () => {
            return syncService.fullSync(true);
        };
        super.successRoute = '/tabs/vault';
    }

    async ngOnInit() {
        const isFirefox = this.platformUtilsService.isFirefox();
        if (this.popupUtilsService.inPopup(window) && isFirefox &&
            this.win.navigator.userAgent.indexOf('Windows NT 10.0;') > -1) {
            // ref: https://bugzilla.mozilla.org/show_bug.cgi?id=1562620
            this.initU2f = false;
        }
        const isSafari = this.platformUtilsService.isSafari();
        await super.ngOnInit();
        if (this.selectedProviderType == null) {
            return;
        }

        if (!isSafari && this.selectedProviderType === TwoFactorProviderType.Email &&
            this.popupUtilsService.inPopup(window)) {
            const confirmed = await this.platformUtilsService.showDialog(this.i18nService.t('popup2faCloseMessage'),
                null, this.i18nService.t('yes'), this.i18nService.t('no'));
            if (confirmed) {
                this.popupUtilsService.popOut(window);
            }
        }

        if (!this.initU2f && this.selectedProviderType === TwoFactorProviderType.U2f &&
            this.popupUtilsService.inPopup(window)) {
            const confirmed = await this.platformUtilsService.showDialog(this.i18nService.t('popupU2fCloseMessage'),
                null, this.i18nService.t('yes'), this.i18nService.t('no'));
            if (confirmed) {
                this.popupUtilsService.popOut(window);
            }
        }
    }

    ngOnDestroy() {
        this.broadcasterService.unsubscribe(BroadcasterSubscriptionId);
        super.ngOnDestroy();
    }

    anotherMethod() {
        this.router.navigate(['2fa-options']);
    }
}
