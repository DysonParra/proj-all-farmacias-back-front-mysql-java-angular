/*
 * @overview        {PropiedadesContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { PropiedadesViewModel } from '../../model/propiedades.model';
import { PropiedadesFacade } from '../../facade/propiedades.facade';
import { PropiedadesComponent } from '../../component/propiedades/propiedades.component';
import { PaginationComponent } from '../../../shared/component/pagination/pagination.component';

/**
 * TODO: Description of {@code PropiedadesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-propiedades-container',
    templateUrl: './propiedades-container.component.html',
    styleUrls: ['./propiedades-container.component.css'],
    imports: [PropiedadesComponent, PaginationComponent]
})
export class PropiedadesContainerComponent extends GenericContainerComponent<PropiedadesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PropiedadesViewModel,
        entityFacade: PropiedadesFacade) {
        super(entityInstance, entityFacade);
    }

}
