import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '@bytegarden/jslib/src/abstractions/api.service';
import { AuthService } from '@bytegarden/jslib/src/abstractions/auth.service';
import { CryptoService } from '@bytegarden/jslib/src/abstractions/crypto.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PasswordGenerationService } from '@bytegarden/jslib/src/abstractions/passwordGeneration.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';
import { StateService } from '@bytegarden/jslib/src/abstractions/state.service';

import { RegisterComponent as BaseRegisterComponent } from '@bytegarden/jslib/src/angular/components/register.component';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
})
export class RegisterComponent extends BaseRegisterComponent {
    constructor(authService: AuthService, router: Router,
        i18nService: I18nService, cryptoService: CryptoService,
        apiService: ApiService, stateService: StateService,
        platformUtilsService: PlatformUtilsService, passwordGenerationService: PasswordGenerationService) {
        super(authService, router, i18nService, cryptoService, apiService, stateService, platformUtilsService,
            passwordGenerationService);
    }
}
