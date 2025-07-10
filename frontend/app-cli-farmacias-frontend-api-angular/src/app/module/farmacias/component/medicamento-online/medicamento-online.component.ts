/*
 * @overview        {MedicamentoOnlineComponent}
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
import { MedicamentoOnlineViewModel } from '../../model/medicamento-online.model';

/**
 * TODO: Description of {@code MedicamentoOnlineComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-medicamento-online',
    templateUrl: './medicamento-online.component.html',
    standalone: false,
    styleUrls: ['./medicamento-online.component.css']
})
export class MedicamentoOnlineComponent extends GenericComponent<MedicamentoOnlineViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MedicamentoOnlineViewModel) {
        super(entityInstance);
    }

}
