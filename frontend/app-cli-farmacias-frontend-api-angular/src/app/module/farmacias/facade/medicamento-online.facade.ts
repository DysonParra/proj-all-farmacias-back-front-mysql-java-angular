/*
 * @overview        {MedicamentoOnlineFacade}
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
import { MedicamentoOnlineViewModel } from '../model/medicamento-online.model';
import { MedicamentoOnlineState } from '../state/medicamento-online.state';
import { MedicamentoOnlineService } from '../service/medicamento-online.service';

/**
 * TODO: Description of {@code MedicamentoOnlineFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MedicamentoOnlineFacade extends GenericFacade<MedicamentoOnlineViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MedicamentoOnlineService,
        entityState: MedicamentoOnlineState) {
        super(entityService, entityState);
    }

}
