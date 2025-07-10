/*
 * @overview        {AutenticacionContainerComponent}
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
import { AutenticacionViewModel } from '../../model/autenticacion.model';
import { AutenticacionFacade } from '../../facade/autenticacion.facade';

/**
 * TODO: Description of {@code AutenticacionContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-autenticacion-container',
    templateUrl: './autenticacion-container.component.html',
    standalone: false,
    styleUrls: ['./autenticacion-container.component.css']
})
export class AutenticacionContainerComponent extends GenericContainerComponent<AutenticacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: AutenticacionViewModel,
        entityFacade: AutenticacionFacade) {
        super(entityInstance, entityFacade);
    }

}
