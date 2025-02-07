import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@bytegarden/jslib/src/abstractions/auth.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';

import {
    TwoFactorOptionsComponent as BaseTwoFactorOptionsComponent,
} from '@bytegarden/jslib/src/angular/components/two-factor-options.component';

@Component({
    selector: 'app-two-factor-options',
    templateUrl: 'two-factor-options.component.html',
})
export class TwoFactorOptionsComponent extends BaseTwoFactorOptionsComponent {
    constructor(authService: AuthService, router: Router,
        i18nService: I18nService, platformUtilsService: PlatformUtilsService) {
        super(authService, router, i18nService, platformUtilsService, window);
    }

    choose(p: any) {
        super.choose(p);
        this.authService.selectedTwoFactorProviderType = p.type;
        this.router.navigate(['2fa']);
    }
}
