/*
 * @overview        {TipoPersonaContainerComponent}
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
import { TipoPersonaViewModel } from '../../model/tipo-persona.model';
import { TipoPersonaFacade } from '../../facade/tipo-persona.facade';

/**
 * TODO: Description of {@code TipoPersonaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipo-persona-container',
    templateUrl: './tipo-persona-container.component.html',
    standalone: false,
    styleUrls: ['./tipo-persona-container.component.css']
})
export class TipoPersonaContainerComponent extends GenericContainerComponent<TipoPersonaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TipoPersonaViewModel,
        entityFacade: TipoPersonaFacade) {
        super(entityInstance, entityFacade);
    }

}
