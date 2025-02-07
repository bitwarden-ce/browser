import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CipherService } from '@bytegarden/jslib/src/abstractions/cipher.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';

import {
    PasswordHistoryComponent as BasePasswordHistoryComponent,
} from '@bytegarden/jslib/src/angular/components/password-history.component';

@Component({
    selector: 'app-password-history',
    templateUrl: 'password-history.component.html',
})
export class PasswordHistoryComponent extends BasePasswordHistoryComponent {
    constructor(cipherService: CipherService, platformUtilsService: PlatformUtilsService,
        i18nService: I18nService, private location: Location,
        private route: ActivatedRoute) {
        super(cipherService, platformUtilsService, i18nService, window);
    }

    async ngOnInit() {
        const queryParamsSub = this.route.queryParams.subscribe(async (params) => {
            if (params.cipherId) {
                this.cipherId = params.cipherId;
            } else {
                this.close();
            }
            await this.init();
            if (queryParamsSub != null) {
                queryParamsSub.unsubscribe();
            }
        });
    }

    close() {
        this.location.back();
    }
}
