import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CryptoService } from '@bytegarden/jslib/src/abstractions/crypto.service';
import { EventService } from '@bytegarden/jslib/src/abstractions/event.service';
import { ExportService } from '@bytegarden/jslib/src/abstractions/export.service';
import { I18nService } from '@bytegarden/jslib/src/abstractions/i18n.service';
import { PlatformUtilsService } from '@bytegarden/jslib/src/abstractions/platformUtils.service';

import { ExportComponent as BaseExportComponent } from '@bytegarden/jslib/src/angular/components/export.component';

@Component({
    selector: 'app-export',
    templateUrl: 'export.component.html',
})
export class ExportComponent extends BaseExportComponent {
    constructor(cryptoService: CryptoService, i18nService: I18nService,
        platformUtilsService: PlatformUtilsService, exportService: ExportService,
        eventService: EventService, private router: Router) {
        super(cryptoService, i18nService, platformUtilsService, exportService, eventService, window);
    }

    protected saved() {
        super.saved();
        this.router.navigate(['/tabs/settings']);
    }
}
