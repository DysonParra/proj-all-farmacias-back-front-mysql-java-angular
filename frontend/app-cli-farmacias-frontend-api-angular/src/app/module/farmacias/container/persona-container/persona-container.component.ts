/*
 * @overview        {PersonaContainerComponent}
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
import { PersonaViewModel } from '../../model/persona.model';
import { PersonaFacade } from '../../facade/persona.facade';

/**
 * TODO: Description of {@code PersonaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-persona-container',
    templateUrl: './persona-container.component.html',
    standalone: false,
    styleUrls: ['./persona-container.component.css']
})
export class PersonaContainerComponent extends GenericContainerComponent<PersonaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PersonaViewModel,
        entityFacade: PersonaFacade) {
        super(entityInstance, entityFacade);
    }

}
