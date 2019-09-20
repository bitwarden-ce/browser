import { CipherService } from '@bytegarden/jslib/src/abstractions/cipher.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';

import { SearchService } from '@bytegarden/jslib/src/services/search.service';

export class PopupSearchService extends SearchService {
    constructor(private mainSearchService: SearchService, cipherService: CipherService,
        platformUtilsService: PlatformUtilsService) {
        super(cipherService, platformUtilsService);
    }

    clearIndex() {
        throw new Error('Not available.');
    }

    indexCiphers(): Promise<void> {
        throw new Error('Not available.');
    }

    getIndexForSearch() {
        return this.mainSearchService.getIndexForSearch();
    }
}
