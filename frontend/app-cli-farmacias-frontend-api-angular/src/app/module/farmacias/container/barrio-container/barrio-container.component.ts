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
import { BarrioComponent } from '../../component/barrio/barrio.component';
import { PaginationComponent } from '../../../shared/component/pagination/pagination.component';

/**
 * TODO: Description of {@code BarrioContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-barrio-container',
    templateUrl: './barrio-container.component.html',
    styleUrls: ['./barrio-container.component.css'],
    imports: [BarrioComponent, PaginationComponent]
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
