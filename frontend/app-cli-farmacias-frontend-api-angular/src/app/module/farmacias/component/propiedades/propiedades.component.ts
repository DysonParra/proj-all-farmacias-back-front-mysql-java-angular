/*
 * @overview        {PropiedadesComponent}
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
import { PropiedadesViewModel } from '../../model/propiedades.model';

/**
 * TODO: Description of {@code PropiedadesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-propiedades',
    templateUrl: './propiedades.component.html',
    standalone: false,
    styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent extends GenericComponent<PropiedadesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PropiedadesViewModel) {
        super(entityInstance);
    }

}
