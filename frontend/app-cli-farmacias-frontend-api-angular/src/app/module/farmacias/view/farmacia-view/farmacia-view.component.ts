/*
 * @overview        {FarmaciaViewComponent}
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
import { FarmaciaContainerComponent } from '../../container/farmacia-container/farmacia-container.component';

/**
 * TODO: Description of {@code FarmaciaViewComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-farmacia-view',
    templateUrl: './farmacia-view.component.html',
    styleUrls: ['./farmacia-view.component.css'],
    imports: [FarmaciaContainerComponent]
})
export class FarmaciaViewComponent implements OnInit {

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
