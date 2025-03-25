/*
 * @fileoverview    {PersonaComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { PersonaViewModel } from '../../model/persona.model';

/**
 * TODO: Description of {@code PersonaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-persona',
    templateUrl: './persona.component.html',
    standalone: false,
    styleUrls: ['./persona.component.css']
})
export class PersonaComponent extends GenericComponent<PersonaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PersonaViewModel) {
        super(entityInstance);
    }

}
