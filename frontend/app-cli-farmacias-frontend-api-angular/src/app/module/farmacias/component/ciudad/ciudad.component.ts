/*
 * @fileoverview    {CiudadComponent}
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
import { CiudadViewModel } from '../../model/ciudad.model';

/**
 * TODO: Description of {@code CiudadComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ciudad',
    templateUrl: './ciudad.component.html',
    standalone: false,
    styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent extends GenericComponent<CiudadViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CiudadViewModel) {
        super(entityInstance);
    }

}
