/*
 * @fileoverview    {LaboratorioMedicamentoFacade}
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
import { LaboratorioMedicamentoViewModel } from '../model/laboratorio-medicamento.model';
import { LaboratorioMedicamentoState } from '../state/laboratorio-medicamento.state';
import { LaboratorioMedicamentoService } from '../service/laboratorio-medicamento.service';

/**
 * TODO: Description of {@code LaboratorioMedicamentoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class LaboratorioMedicamentoFacade extends GenericFacade<LaboratorioMedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: LaboratorioMedicamentoService,
        entityState: LaboratorioMedicamentoState) {
        super(entityService, entityState);
    }

}
