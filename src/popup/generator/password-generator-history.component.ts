import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PasswordGenerationService } from '@bytegarden/jslib/src/abstractions/passwordGeneration.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';

import {
    PasswordGeneratorHistoryComponent as BasePasswordGeneratorHistoryComponent,
} from '@bytegarden/jslib/src/angular/components/password-generator-history.component';

@Component({
    selector: 'app-password-generator-history',
    templateUrl: 'password-generator-history.component.html',
})
export class PasswordGeneratorHistoryComponent extends BasePasswordGeneratorHistoryComponent {
    constructor(passwordGenerationService: PasswordGenerationService, platformUtilsService: PlatformUtilsService,
        i18nService: I18nService, private location: Location) {
        super(passwordGenerationService, platformUtilsService, i18nService, window);
    }

    close() {
        this.location.back();
    }
}
