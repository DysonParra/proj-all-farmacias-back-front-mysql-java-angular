/*
 * @overview        {BarrioComponent}
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
import { BarrioViewModel } from '../../model/barrio.model';
import { DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';
import { DxoPagingModule, DxoPagerModule, DxoSelectionModule, DxoSortingModule, DxoEditingModule, DxoFilterRowModule, DxoHeaderFilterModule, DxoSearchPanelModule, DxoGroupPanelModule, DxoStateStoringModule, DxoColumnChooserModule, DxoExportModule, DxiColumnModule, DxiValidationRuleModule } from 'devextreme-angular/ui/nested';
import { NgFor, NgIf } from '@angular/common';

/**
 * TODO: Description of {@code BarrioComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-barrio',
    templateUrl: './barrio.component.html',
    styleUrls: ['./barrio.component.css'],
    imports: [DxDataGridModule, DxoPagingModule, DxoPagerModule, DxoSelectionModule, DxoSortingModule, DxoEditingModule, DxoFilterRowModule, DxoHeaderFilterModule, DxoSearchPanelModule, DxoGroupPanelModule, DxoStateStoringModule, DxoColumnChooserModule, DxoExportModule, DxiColumnModule, DxiValidationRuleModule, NgFor, NgIf, DxLoadPanelModule]
})
export class BarrioComponent extends GenericComponent<BarrioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: BarrioViewModel) {
        super(entityInstance);
    }

}
