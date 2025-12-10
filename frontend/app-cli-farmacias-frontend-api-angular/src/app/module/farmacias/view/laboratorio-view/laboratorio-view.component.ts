/*
 * @overview        {LaboratorioViewComponent}
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
import { LaboratorioContainerComponent } from '../../container/laboratorio-container/laboratorio-container.component';

/**
 * TODO: Description of {@code LaboratorioViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-laboratorio-view',
    templateUrl: './laboratorio-view.component.html',
    styleUrls: ['./laboratorio-view.component.css'],
    imports: [LaboratorioContainerComponent]
})
export class LaboratorioViewComponent implements OnInit {

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
