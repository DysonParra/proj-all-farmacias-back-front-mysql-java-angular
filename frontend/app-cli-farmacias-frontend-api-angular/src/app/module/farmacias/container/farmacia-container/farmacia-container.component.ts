/*
 * @overview        {FarmaciaContainerComponent}
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
import { FarmaciaViewModel } from '../../model/farmacia.model';
import { FarmaciaFacade } from '../../facade/farmacia.facade';

/**
 * TODO: Description of {@code FarmaciaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-farmacia-container',
    templateUrl: './farmacia-container.component.html',
    standalone: false,
    styleUrls: ['./farmacia-container.component.css']
})
export class FarmaciaContainerComponent extends GenericContainerComponent<FarmaciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FarmaciaViewModel,
        entityFacade: FarmaciaFacade) {
        super(entityInstance, entityFacade);
    }

}
