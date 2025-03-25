/*
 * @fileoverview    {LaboratorioContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { LaboratorioViewModel } from '../../model/laboratorio.model';
import { LaboratorioFacade } from '../../facade/laboratorio.facade';

/**
 * TODO: Description of {@code LaboratorioContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-laboratorio-container',
    templateUrl: './laboratorio-container.component.html',
    standalone: false,
    styleUrls: ['./laboratorio-container.component.css']
})
export class LaboratorioContainerComponent extends GenericContainerComponent<LaboratorioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: LaboratorioViewModel,
        entityFacade: LaboratorioFacade) {
        super(entityInstance, entityFacade);
    }

}
