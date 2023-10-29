/*
 * @fileoverview    {MedicamentoOnline}
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
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code MedicamentoOnline}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"MedicamentoOnline\"")
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
    @Column(length = 10)
    private String strCantidad;
    @Column(length = 100)
    private String strConcentracion;
    @Column(length = 500)
    private String strDescripcion;
    @Column(length = 100)
    private String strEan;
    @Column(length = 8000)
    private String strImagen;
    @Column(length = 100)
    private String strLaboratorio;
    @Column(length = 100)
    private String strMarca;
    @Column(length = 100)
    private String strNombre;
    @Column(length = 30)
    private String strPaginaProducto;
    @Column(length = 20)
    private String strPrecioUnitario;
    @Column(length = 100)
    private String strPresentacion;
    @Column(length = 100)
    private String strPrincipioActivo;
    @Column(length = 100)
    private String strRegistroInvima;
    @JoinColumn(name = "intIdPortalOrigen", referencedColumnName = "intCodigoFarmacia")
    private Long intIdPortalOrigen;

}
