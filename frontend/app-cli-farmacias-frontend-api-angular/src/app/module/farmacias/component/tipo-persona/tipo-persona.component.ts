/*
 * @overview        {TipoPersonaComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { TipoPersonaViewModel } from '../../model/tipo-persona.model';
import { DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';
import { DxoPagingModule, DxoPagerModule, DxoSelectionModule, DxoSortingModule, DxoEditingModule, DxoFilterRowModule, DxoHeaderFilterModule, DxoSearchPanelModule, DxoGroupPanelModule, DxoStateStoringModule, DxoColumnChooserModule, DxoExportModule, DxiColumnModule, DxiValidationRuleModule } from 'devextreme-angular/ui/nested';
import { NgFor, NgIf } from '@angular/common';

/**
 * TODO: Description of {@code TipoPersonaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipo-persona',
    templateUrl: './tipo-persona.component.html',
    styleUrls: ['./tipo-persona.component.css'],
    imports: [DxDataGridModule, DxoPagingModule, DxoPagerModule, DxoSelectionModule, DxoSortingModule, DxoEditingModule, DxoFilterRowModule, DxoHeaderFilterModule, DxoSearchPanelModule, DxoGroupPanelModule, DxoStateStoringModule, DxoColumnChooserModule, DxoExportModule, DxiColumnModule, DxiValidationRuleModule, NgFor, NgIf, DxLoadPanelModule]
})
export class TipoPersonaComponent extends GenericComponent<TipoPersonaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TipoPersonaViewModel) {
        super(entityInstance);
    }

}
