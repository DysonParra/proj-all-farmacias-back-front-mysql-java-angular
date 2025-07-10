/*
 * @overview        {TipoPersonaFacade}
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
import { TipoPersonaViewModel } from '../model/tipo-persona.model';
import { TipoPersonaState } from '../state/tipo-persona.state';
import { TipoPersonaService } from '../service/tipo-persona.service';

/**
 * TODO: Description of {@code TipoPersonaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TipoPersonaFacade extends GenericFacade<TipoPersonaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TipoPersonaService,
        entityState: TipoPersonaState) {
        super(entityService, entityState);
    }

}
