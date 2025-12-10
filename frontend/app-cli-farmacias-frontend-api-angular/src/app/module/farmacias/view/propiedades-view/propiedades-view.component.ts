/*
 * @overview        {PropiedadesViewComponent}
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
import { PropiedadesContainerComponent } from '../../container/propiedades-container/propiedades-container.component';

/**
 * TODO: Description of {@code PropiedadesViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-propiedades-view',
    templateUrl: './propiedades-view.component.html',
    styleUrls: ['./propiedades-view.component.css'],
    imports: [PropiedadesContainerComponent]
})
export class PropiedadesViewComponent implements OnInit {

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
