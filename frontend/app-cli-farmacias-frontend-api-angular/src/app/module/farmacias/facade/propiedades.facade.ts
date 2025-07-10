/*
 * @overview        {PropiedadesFacade}
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
import { PropiedadesViewModel } from '../model/propiedades.model';
import { PropiedadesState } from '../state/propiedades.state';
import { PropiedadesService } from '../service/propiedades.service';

/**
 * TODO: Description of {@code PropiedadesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PropiedadesFacade extends GenericFacade<PropiedadesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: PropiedadesService,
        entityState: PropiedadesState) {
        super(entityService, entityState);
    }

}
