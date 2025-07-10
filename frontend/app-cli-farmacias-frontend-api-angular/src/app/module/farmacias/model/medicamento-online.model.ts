/*
 * @overview        {MedicamentoOnlineViewModel}
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
import { Injectable } from "@angular/core";
import { GenericViewModel } from "@app/module/essential/model/generic.model";
import { Id } from "@app/module/essential/decorator/id.decorator";
import { NotNull } from "@app/module/essential/decorator/not-null.decorator";
import { Hidden } from "@app/module/essential/decorator/hidden.decorator";
import { Temporal } from "@app/module/essential/decorator/temporal.decorator";
import { TemporalType } from "@app/module/essential/model/temporal-type.model";

/**
 * TODO: Description of {@code MedicamentoOnlineViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MedicamentoOnlineViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdMedicamento: number;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaDescarga: string;
    public intIdPortalOrigen: number;
    public strCantidad: string;
    public strConcentracion: string;
    public strDescripcion: string;
    public strEan: string;
    public strImagen: string;
    public strLaboratorio: string;
    public strMarca: string;
    public strNombre: string;
    public strPaginaProducto: string;
    public strPrecioUnitario: string;
    public strPresentacion: string;
    public strPrincipioActivo: string;
    public strRegistroInvima: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): MedicamentoOnlineViewModel {
        return new MedicamentoOnlineViewModel();
    }

}
