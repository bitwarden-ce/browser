import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@bytegarden/jslib/src/abstractions/auth.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';
import { StateService } from '@bytegarden/jslib/src/abstractions/state.service';
import { StorageService } from '@bytegarden/jslib/src/abstractions/storage.service';
import { SyncService } from '@bytegarden/jslib/src/abstractions/sync.service';

import { LoginComponent as BaseLoginComponent } from '@bytegarden/jslib/src/angular/components/login.component';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent extends BaseLoginComponent {
    constructor(authService: AuthService, router: Router,
        platformUtilsService: PlatformUtilsService, i18nService: I18nService,
        syncService: SyncService, storageService: StorageService,
        stateService: StateService) {
        super(authService, router, platformUtilsService, i18nService, storageService, stateService);
        super.onSuccessfulLogin = () => {
            return syncService.fullSync(true);
        };
        super.successRoute = '/tabs/vault';
    }

    settings() {
        this.router.navigate(['environment']);
    }
}
