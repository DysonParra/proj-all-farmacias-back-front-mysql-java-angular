/*
 * @fileoverview    {FarmaciaMedicamentoFacade}
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
import { FarmaciaMedicamentoViewModel } from '../model/farmacia-medicamento.model';
import { FarmaciaMedicamentoState } from '../state/farmacia-medicamento.state';
import { FarmaciaMedicamentoService } from '../service/farmacia-medicamento.service';

/**
 * TODO: Description of {@code FarmaciaMedicamentoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class FarmaciaMedicamentoFacade extends GenericFacade<FarmaciaMedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: FarmaciaMedicamentoService,
        entityState: FarmaciaMedicamentoState) {
        super(entityService, entityState);
    }

}
