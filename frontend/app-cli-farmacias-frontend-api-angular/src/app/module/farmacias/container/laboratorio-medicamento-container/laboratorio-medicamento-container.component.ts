/*
 * @overview        {LaboratorioMedicamentoContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { LaboratorioMedicamentoViewModel } from '../../model/laboratorio-medicamento.model';
import { LaboratorioMedicamentoFacade } from '../../facade/laboratorio-medicamento.facade';

/**
 * TODO: Description of {@code LaboratorioMedicamentoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-laboratorio-medicamento-container',
    templateUrl: './laboratorio-medicamento-container.component.html',
    standalone: false,
    styleUrls: ['./laboratorio-medicamento-container.component.css']
})
export class LaboratorioMedicamentoContainerComponent extends GenericContainerComponent<LaboratorioMedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: LaboratorioMedicamentoViewModel,
        entityFacade: LaboratorioMedicamentoFacade) {
        super(entityInstance, entityFacade);
    }

}
