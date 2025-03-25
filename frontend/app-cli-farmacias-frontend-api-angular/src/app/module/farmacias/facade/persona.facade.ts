/*
 * @fileoverview    {PersonaFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { PersonaViewModel } from '../model/persona.model';
import { PersonaState } from '../state/persona.state';
import { PersonaService } from '../service/persona.service';

/**
 * TODO: Description of {@code PersonaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PersonaFacade extends GenericFacade<PersonaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: PersonaService,
        entityState: PersonaState) {
        super(entityService, entityState);
    }

}
