/*
 * @fileoverview    {LaboratorioComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { LaboratorioViewModel } from '../../model/laboratorio.model';

/**
 * TODO: Description of {@code LaboratorioComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-laboratorio',
    templateUrl: './laboratorio.component.html',
    standalone: false,
    styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent extends GenericComponent<LaboratorioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: LaboratorioViewModel) {
        super(entityInstance);
    }

}
