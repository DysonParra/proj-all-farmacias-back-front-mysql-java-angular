/*
 * @fileoverview    {LaboratorioMedicamentoService}
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
import { Injectable } from '@angular/core';
import { GenericService } from '@app/module/essential/service/generic.service';
import { LaboratorioMedicamentoViewModel } from '../model/laboratorio-medicamento.model';

/**
 * TODO: Description of {@code LaboratorioMedicamentoService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class LaboratorioMedicamentoService extends GenericService<LaboratorioMedicamentoViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/laboratorio-medicamento/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/laboratorio-medicamento`;
    public dtoList: string = `laboratorioMedicamentoDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: LaboratorioMedicamentoViewModel) {
        super(entityInstance);
    }

}
