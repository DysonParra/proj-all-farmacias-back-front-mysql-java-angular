/*
 * @fileoverview    {BarrioDTO}
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
 * TODO: Definición de {@code BarrioDTO}.
 *
 * @author Dyson Parra
 * @since 11
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class BarrioDTO {

    private Long intIdBarrio;
    private String strNombre;
    private Long intIdCiudad;

}
