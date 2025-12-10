/*
 * @overview        {PersonaViewComponent}
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
import { PersonaContainerComponent } from '../../container/persona-container/persona-container.component';

/**
 * TODO: Description of {@code PersonaViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-persona-view',
    templateUrl: './persona-view.component.html',
    styleUrls: ['./persona-view.component.css'],
    imports: [PersonaContainerComponent]
})
export class PersonaViewComponent implements OnInit {

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
