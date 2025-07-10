/*
 * @overview        {AutenticacionFacade}
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
import { AutenticacionViewModel } from '../model/autenticacion.model';
import { AutenticacionState } from '../state/autenticacion.state';
import { AutenticacionService } from '../service/autenticacion.service';

/**
 * TODO: Description of {@code AutenticacionFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class AutenticacionFacade extends GenericFacade<AutenticacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: AutenticacionService,
        entityState: AutenticacionState) {
        super(entityService, entityState);
    }

}
