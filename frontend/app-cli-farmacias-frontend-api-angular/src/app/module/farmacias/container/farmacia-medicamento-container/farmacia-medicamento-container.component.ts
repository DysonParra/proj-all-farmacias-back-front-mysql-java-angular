/*
 * @overview        {FarmaciaMedicamentoContainerComponent}
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
import { FarmaciaMedicamentoViewModel } from '../../model/farmacia-medicamento.model';
import { FarmaciaMedicamentoFacade } from '../../facade/farmacia-medicamento.facade';
import { FarmaciaMedicamentoComponent } from '../../component/farmacia-medicamento/farmacia-medicamento.component';
import { PaginationComponent } from '../../../shared/component/pagination/pagination.component';

/**
 * TODO: Description of {@code FarmaciaMedicamentoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-farmacia-medicamento-container',
    templateUrl: './farmacia-medicamento-container.component.html',
    styleUrls: ['./farmacia-medicamento-container.component.css'],
    imports: [FarmaciaMedicamentoComponent, PaginationComponent]
})
export class FarmaciaMedicamentoContainerComponent extends GenericContainerComponent<FarmaciaMedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FarmaciaMedicamentoViewModel,
        entityFacade: FarmaciaMedicamentoFacade) {
        super(entityInstance, entityFacade);
    }

}
