/*
 * @overview        {AutenticacionViewComponent}
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
import { AutenticacionContainerComponent } from '../../container/autenticacion-container/autenticacion-container.component';

/**
 * TODO: Description of {@code AutenticacionViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-autenticacion-view',
    templateUrl: './autenticacion-view.component.html',
    styleUrls: ['./autenticacion-view.component.css'],
    imports: [AutenticacionContainerComponent]
})
export class AutenticacionViewComponent implements OnInit {

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
