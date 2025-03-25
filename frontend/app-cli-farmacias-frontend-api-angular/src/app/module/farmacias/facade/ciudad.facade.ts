/*
 * @fileoverview    {CiudadFacade}
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
import { CiudadViewModel } from '../model/ciudad.model';
import { CiudadState } from '../state/ciudad.state';
import { CiudadService } from '../service/ciudad.service';

/**
 * TODO: Description of {@code CiudadFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CiudadFacade extends GenericFacade<CiudadViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CiudadService,
        entityState: CiudadState) {
        super(entityService, entityState);
    }

}
