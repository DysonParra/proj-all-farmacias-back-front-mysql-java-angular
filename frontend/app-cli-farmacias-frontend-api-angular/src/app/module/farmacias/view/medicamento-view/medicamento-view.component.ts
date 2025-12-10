/*
 * @overview        {MedicamentoViewComponent}
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
import { MedicamentoContainerComponent } from '../../container/medicamento-container/medicamento-container.component';

/**
 * TODO: Description of {@code MedicamentoViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-medicamento-view',
    templateUrl: './medicamento-view.component.html',
    styleUrls: ['./medicamento-view.component.css'],
    imports: [MedicamentoContainerComponent]
})
export class MedicamentoViewComponent implements OnInit {

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
