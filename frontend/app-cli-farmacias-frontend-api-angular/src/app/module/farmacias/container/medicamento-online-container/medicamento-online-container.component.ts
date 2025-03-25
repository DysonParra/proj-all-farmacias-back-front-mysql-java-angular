/*
 * @fileoverview    {MedicamentoOnlineContainerComponent}
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
import { MedicamentoOnlineViewModel } from '../../model/medicamento-online.model';
import { MedicamentoOnlineFacade } from '../../facade/medicamento-online.facade';

/**
 * TODO: Description of {@code MedicamentoOnlineContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-medicamento-online-container',
    templateUrl: './medicamento-online-container.component.html',
    standalone: false,
    styleUrls: ['./medicamento-online-container.component.css']
})
export class MedicamentoOnlineContainerComponent extends GenericContainerComponent<MedicamentoOnlineViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MedicamentoOnlineViewModel,
        entityFacade: MedicamentoOnlineFacade) {
        super(entityInstance, entityFacade);
    }

}
