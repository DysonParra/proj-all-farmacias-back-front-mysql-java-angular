/*
 * @overview        {CiudadViewComponent}
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
import { CiudadContainerComponent } from '../../container/ciudad-container/ciudad-container.component';

/**
 * TODO: Description of {@code CiudadViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ciudad-view',
    templateUrl: './ciudad-view.component.html',
    styleUrls: ['./ciudad-view.component.css'],
    imports: [CiudadContainerComponent]
})
export class CiudadViewComponent implements OnInit {

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
