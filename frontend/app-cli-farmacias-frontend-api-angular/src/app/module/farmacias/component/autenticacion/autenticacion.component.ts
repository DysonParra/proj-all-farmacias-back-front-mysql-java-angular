/*
 * @fileoverview    {AutenticacionComponent}
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
import { AutenticacionViewModel } from '../../model/autenticacion.model';

/**
 * TODO: Description of {@code AutenticacionComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-autenticacion',
    templateUrl: './autenticacion.component.html',
    standalone: false,
    styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent extends GenericComponent<AutenticacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: AutenticacionViewModel) {
        super(entityInstance);
    }

}
