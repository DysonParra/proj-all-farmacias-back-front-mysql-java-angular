/*
 * @fileoverview    {Medicamento}
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
 * TODO: Definición de {@code Medicamento}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Medicamento\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Medicamento implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intId;
    private Boolean bitMedicamentoPos;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaCreacion;
    private Long intIdLaboratorio;
    @Column(length = 200)
    private String strAccionTerapeutica;
    @Column(length = 10)
    private String strCantidad;
    @Column(length = 100)
    private String strCodigoAtc;
    @Column(length = 20)
    private String strConcentracion;
    @Column(length = 100)
    private String strEan;
    @Column(length = 100)
    private String strMarca;
    @Column(length = 200)
    private String strNombre;
    @Column(length = 100)
    private String strNombreComercial;
    @Column(length = 60)
    private String strNombreGenerico;
    @Column(length = 100)
    private String strPresentacion;
    @Column(length = 100)
    private String strPrincipioActivo;
    @Column(length = 100)
    private String strRegistroInvima;
    @Column(length = 20)
    private String strUnidadMedida;

}
