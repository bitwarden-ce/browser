import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
    ActivatedRoute,
    Router,
} from '@angular/router';

import { CipherService } from '@bytegarden/jslib/src/abstractions/cipher.service';
import { CollectionService } from '@bytegarden/jslib/src/abstractions/collection.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';
import { UserService } from '@bytegarden/jslib/src/abstractions/user.service';

import { ShareComponent as BaseShareComponent } from '@bytegarden/jslib/src/angular/components/share.component';

@Component({
    selector: 'app-vault-share',
    templateUrl: 'share.component.html',
})
export class ShareComponent extends BaseShareComponent {
    constructor(collectionService: CollectionService, platformUtilsService: PlatformUtilsService,
        i18nService: I18nService, userService: UserService,
        cipherService: CipherService, private route: ActivatedRoute,
        private location: Location, private router: Router) {
        super(collectionService, platformUtilsService, i18nService, userService, cipherService);
    }

    async ngOnInit() {
        this.onSharedCipher.subscribe(() => {
            this.router.navigate(['view-cipher', { cipherId: this.cipherId }]);
        });
        const queryParamsSub = this.route.queryParams.subscribe(async (params) => {
            this.cipherId = params.cipherId;
            await this.load();
            if (queryParamsSub != null) {
                queryParamsSub.unsubscribe();
            }
        });
    }

    async submit(): Promise<boolean> {
        const success = await super.submit();
        if (success) {
            this.location.back();
        }
        return success;
    }

    cancel() {
        this.location.back();
    }
}
