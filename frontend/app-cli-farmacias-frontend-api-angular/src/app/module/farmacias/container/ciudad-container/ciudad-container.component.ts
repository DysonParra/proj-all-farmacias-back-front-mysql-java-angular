/*
 * @fileoverview    {CiudadContainerComponent}
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
import { CiudadViewModel } from '../../model/ciudad.model';
import { CiudadFacade } from '../../facade/ciudad.facade';

/**
 * TODO: Description of {@code CiudadContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ciudad-container',
    templateUrl: './ciudad-container.component.html',
    standalone: false,
    styleUrls: ['./ciudad-container.component.css']
})
export class CiudadContainerComponent extends GenericContainerComponent<CiudadViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CiudadViewModel,
        entityFacade: CiudadFacade) {
        super(entityInstance, entityFacade);
    }

}
