/*
 * @overview        {MedicamentoContainerComponent}
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
import { MedicamentoViewModel } from '../../model/medicamento.model';
import { MedicamentoFacade } from '../../facade/medicamento.facade';

/**
 * TODO: Description of {@code MedicamentoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-medicamento-container',
    templateUrl: './medicamento-container.component.html',
    standalone: false,
    styleUrls: ['./medicamento-container.component.css']
})
export class MedicamentoContainerComponent extends GenericContainerComponent<MedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MedicamentoViewModel,
        entityFacade: MedicamentoFacade) {
        super(entityInstance, entityFacade);
    }

}
