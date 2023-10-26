/*
 * @fileoverview    {Farmacia}
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
 * TODO: Definición de {@code Farmacia}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Farmacia\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Farmacia implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intCodigoFarmacia;
    @Column(length = 255)
    private String strCelular;
    @Column(length = 20)
    private String strNit;
    @Column(length = 200)
    private String strNombre;
    @Column(length = 20)
    private String strTelefonoFijo;
    @Column(length = 4000)
    private String strUrlExtraccion;
    @JoinColumn(name = "intIdBarrio", referencedColumnName = "intIdBarrio")
    private Long intIdBarrio;

}
