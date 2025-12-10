/*
 * @overview        {LaboratorioMedicamentoViewComponent}
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
import { Component, OnInit } from '@angular/core';
import { LaboratorioMedicamentoContainerComponent } from '../../container/laboratorio-medicamento-container/laboratorio-medicamento-container.component';

/**
 * TODO: Description of {@code LaboratorioMedicamentoViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-laboratorio-medicamento-view',
    templateUrl: './laboratorio-medicamento-view.component.html',
    styleUrls: ['./laboratorio-medicamento-view.component.css'],
    imports: [LaboratorioMedicamentoContainerComponent]
})
export class LaboratorioMedicamentoViewComponent implements OnInit {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor() { }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {

    }

}
