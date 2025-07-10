/*
 * @overview        {BarrioContainerComponent}
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
import { BarrioViewModel } from '../../model/barrio.model';
import { BarrioFacade } from '../../facade/barrio.facade';

/**
 * TODO: Description of {@code BarrioContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-barrio-container',
    templateUrl: './barrio-container.component.html',
    standalone: false,
    styleUrls: ['./barrio-container.component.css']
})
export class BarrioContainerComponent extends GenericContainerComponent<BarrioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: BarrioViewModel,
        entityFacade: BarrioFacade) {
        super(entityInstance, entityFacade);
    }

}
