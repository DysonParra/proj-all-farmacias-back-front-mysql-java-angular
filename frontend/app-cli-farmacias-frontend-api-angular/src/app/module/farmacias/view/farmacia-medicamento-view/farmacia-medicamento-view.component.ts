/*
 * @overview        {FarmaciaMedicamentoViewComponent}
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
import { FarmaciaMedicamentoContainerComponent } from '../../container/farmacia-medicamento-container/farmacia-medicamento-container.component';

/**
 * TODO: Description of {@code FarmaciaMedicamentoViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-farmacia-medicamento-view',
    templateUrl: './farmacia-medicamento-view.component.html',
    styleUrls: ['./farmacia-medicamento-view.component.css'],
    imports: [FarmaciaMedicamentoContainerComponent]
})
export class FarmaciaMedicamentoViewComponent implements OnInit {

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
