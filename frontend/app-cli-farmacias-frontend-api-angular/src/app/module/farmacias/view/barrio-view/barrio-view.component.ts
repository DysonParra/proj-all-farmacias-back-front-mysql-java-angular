/*
 * @overview        {BarrioViewComponent}
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
import { BarrioContainerComponent } from '../../container/barrio-container/barrio-container.component';

/**
 * TODO: Description of {@code BarrioViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-barrio-view',
    templateUrl: './barrio-view.component.html',
    styleUrls: ['./barrio-view.component.css'],
    imports: [BarrioContainerComponent]
})
export class BarrioViewComponent implements OnInit {

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
