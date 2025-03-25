/*
 * @fileoverview    {FarmaciaComponent}
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
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { FarmaciaViewModel } from '../../model/farmacia.model';

/**
 * TODO: Description of {@code FarmaciaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-farmacia',
    templateUrl: './farmacia.component.html',
    standalone: false,
    styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent extends GenericComponent<FarmaciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FarmaciaViewModel) {
        super(entityInstance);
    }

}
