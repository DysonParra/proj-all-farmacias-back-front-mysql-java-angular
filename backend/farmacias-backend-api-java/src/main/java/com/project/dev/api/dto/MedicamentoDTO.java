/*
 * @fileoverview    {MedicamentoDTO} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code MedicamentoDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MedicamentoDTO {

    private Long intId;
    private Boolean bitMedicamentoPos;
    private Date dtFechaCreacion;
    private Long intIdLaboratorio;
    private String strAccionTerapeutica;
    private String strCantidad;
    private String strCodigoAtc;
    private String strConcentracion;
    private String strEan;
    private String strMarca;
    private String strNombre;
    private String strNombreComercial;
    private String strNombreGenerico;
    private String strPresentacion;
    private String strPrincipioActivo;
    private String strRegistroInvima;
    private String strUnidadMedida;

}
