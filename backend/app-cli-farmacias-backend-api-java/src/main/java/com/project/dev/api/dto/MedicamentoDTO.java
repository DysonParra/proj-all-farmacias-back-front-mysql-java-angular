/*
 * @fileoverview    {MedicamentoDTO}
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
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code MedicamentoDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
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
