/*
 * @fileoverview    {FarmaciaMedicamentoComponent}
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
import { FarmaciaMedicamentoViewModel } from '../../model/farmacia-medicamento.model';

/**
 * TODO: Description of {@code FarmaciaMedicamentoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-farmacia-medicamento',
    templateUrl: './farmacia-medicamento.component.html',
    standalone: false,
    styleUrls: ['./farmacia-medicamento.component.css']
})
export class FarmaciaMedicamentoComponent extends GenericComponent<FarmaciaMedicamentoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FarmaciaMedicamentoViewModel) {
        super(entityInstance);
    }

}
