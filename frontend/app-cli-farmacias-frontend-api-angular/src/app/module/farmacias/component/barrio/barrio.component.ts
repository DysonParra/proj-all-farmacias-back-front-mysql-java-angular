/*
 * @fileoverview    {BarrioComponent}
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
import { BarrioViewModel } from '../../model/barrio.model';

/**
 * TODO: Description of {@code BarrioComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-barrio',
    templateUrl: './barrio.component.html',
    standalone: false,
    styleUrls: ['./barrio.component.css']
})
export class BarrioComponent extends GenericComponent<BarrioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: BarrioViewModel) {
        super(entityInstance);
    }

}
