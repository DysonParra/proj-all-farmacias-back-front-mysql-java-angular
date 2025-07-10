/*
 * @overview        {MedicamentoFacade}
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
import { MedicamentoViewModel } from '../model/medicamento.model';
import { MedicamentoState } from '../state/medicamento.state';
import { MedicamentoService } from '../service/medicamento.service';

/**
 * TODO: Description of {@code MedicamentoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MedicamentoFacade extends GenericFacade<MedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MedicamentoService,
        entityState: MedicamentoState) {
        super(entityService, entityState);
    }

}
