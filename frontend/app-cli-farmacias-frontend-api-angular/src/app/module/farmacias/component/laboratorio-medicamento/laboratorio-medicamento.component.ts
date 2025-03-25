/*
 * @fileoverview    {LaboratorioMedicamentoComponent}
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
import { LaboratorioMedicamentoViewModel } from '../../model/laboratorio-medicamento.model';

/**
 * TODO: Description of {@code LaboratorioMedicamentoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-laboratorio-medicamento',
    templateUrl: './laboratorio-medicamento.component.html',
    standalone: false,
    styleUrls: ['./laboratorio-medicamento.component.css']
})
export class LaboratorioMedicamentoComponent extends GenericComponent<LaboratorioMedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: LaboratorioMedicamentoViewModel) {
        super(entityInstance);
    }

}
