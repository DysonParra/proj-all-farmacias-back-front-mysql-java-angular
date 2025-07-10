/*
 * @overview        {LaboratorioFacade}
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
import { LaboratorioViewModel } from '../model/laboratorio.model';
import { LaboratorioState } from '../state/laboratorio.state';
import { LaboratorioService } from '../service/laboratorio.service';

/**
 * TODO: Description of {@code LaboratorioFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class LaboratorioFacade extends GenericFacade<LaboratorioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: LaboratorioService,
        entityState: LaboratorioState) {
        super(entityService, entityState);
    }

}
