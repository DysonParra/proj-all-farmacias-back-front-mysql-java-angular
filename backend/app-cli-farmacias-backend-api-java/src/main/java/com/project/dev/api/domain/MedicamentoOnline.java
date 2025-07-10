/*
 * @overview        {MedicamentoOnline}
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
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code MedicamentoOnline}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"medicamento_online\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MedicamentoOnline implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMedicamento;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaDescarga;
    private Long intIdPortalOrigen;
    private String strCantidad;
    private String strConcentracion;
    private String strDescripcion;
    private String strEan;
    private String strImagen;
    private String strLaboratorio;
    private String strMarca;
    private String strNombre;
    private String strPaginaProducto;
    private String strPrecioUnitario;
    private String strPresentacion;
    private String strPrincipioActivo;
    private String strRegistroInvima;

}
