import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CryptoService } from '@bytegarden/jslib/src/abstractions/crypto.service';
import { EnvironmentService } from '@bytegarden/jslib/src/abstractions/environment.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { LockService } from '@bytegarden/jslib/src/abstractions/lock.service';
import { MessagingService } from '@bytegarden/jslib/src/abstractions/messaging.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';
import { StateService } from '@bytegarden/jslib/src/abstractions/state.service';
import { StorageService } from '@bytegarden/jslib/src/abstractions/storage.service';
import { UserService } from '@bytegarden/jslib/src/abstractions/user.service';

import { LockComponent as BaseLockComponent } from '@bytegarden/jslib/src/angular/components/lock.component';

@Component({
    selector: 'app-lock',
    templateUrl: 'lock.component.html',
})
export class LockComponent extends BaseLockComponent {
    constructor(router: Router, i18nService: I18nService,
        platformUtilsService: PlatformUtilsService, messagingService: MessagingService,
        userService: UserService, cryptoService: CryptoService,
        storageService: StorageService, lockService: LockService,
        environmentService: EnvironmentService, stateService: StateService) {
        super(router, i18nService, platformUtilsService, messagingService, userService, cryptoService,
            storageService, lockService, environmentService, stateService);
        this.successRoute = '/tabs/current';
    }

    async ngOnInit() {
        await super.ngOnInit();
        window.setTimeout(() => {
            document.getElementById(this.pinLock ? 'pin' : 'masterPassword').focus();
        }, 100);
    }
}
