/*
 * @fileoverview    {MedicamentoComponent}
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
import { MedicamentoViewModel } from '../../model/medicamento.model';

/**
 * TODO: Description of {@code MedicamentoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-medicamento',
    templateUrl: './medicamento.component.html',
    standalone: false,
    styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent extends GenericComponent<MedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MedicamentoViewModel) {
        super(entityInstance);
    }

}
