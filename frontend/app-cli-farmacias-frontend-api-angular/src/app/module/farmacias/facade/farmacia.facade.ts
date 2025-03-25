/*
 * @fileoverview    {FarmaciaFacade}
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
import { FarmaciaViewModel } from '../model/farmacia.model';
import { FarmaciaState } from '../state/farmacia.state';
import { FarmaciaService } from '../service/farmacia.service';

/**
 * TODO: Description of {@code FarmaciaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class FarmaciaFacade extends GenericFacade<FarmaciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: FarmaciaService,
        entityState: FarmaciaState) {
        super(entityService, entityState);
    }

}
