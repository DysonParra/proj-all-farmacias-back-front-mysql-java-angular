/*
 * @fileoverview    {BarrioFacade}
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
import { BarrioViewModel } from '../model/barrio.model';
import { BarrioState } from '../state/barrio.state';
import { BarrioService } from '../service/barrio.service';

/**
 * TODO: Description of {@code BarrioFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class BarrioFacade extends GenericFacade<BarrioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: BarrioService,
        entityState: BarrioState) {
        super(entityService, entityState);
    }

}
