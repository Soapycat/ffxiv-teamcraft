import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {I18nToolsService} from '../../../core/i18n-tools.service';
import {I18nName} from '../../../model/list/i18n-name';

@Component({
    selector: 'app-desynth-popup',
    templateUrl: './desynth-popup.component.html',
    styleUrls: ['./desynth-popup.component.scss']
})
export class DesynthPopupComponent {

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private i18n: I18nToolsService) {
    }

    public getName(name: I18nName): string {
        return this.i18n.getName(name);
    }
}