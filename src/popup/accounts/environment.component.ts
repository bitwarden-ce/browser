import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EnvironmentService } from '@bytegarden/jslib/src/abstractions/environment.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';

import { EnvironmentComponent as BaseEnvironmentComponent } from '@bytegarden/jslib/src/angular/components/environment.component';

@Component({
    selector: 'app-environment',
    templateUrl: 'environment.component.html',
})
export class EnvironmentComponent extends BaseEnvironmentComponent {
    constructor(platformUtilsService: PlatformUtilsService, environmentService: EnvironmentService,
        i18nService: I18nService, private router: Router) {
        super(platformUtilsService, environmentService, i18nService);
        this.showCustom = true;
    }

    saved() {
        super.saved();
        this.router.navigate(['']);
    }
}
