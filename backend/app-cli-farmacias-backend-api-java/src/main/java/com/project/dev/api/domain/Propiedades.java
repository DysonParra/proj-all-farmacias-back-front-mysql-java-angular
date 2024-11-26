/*
 * @fileoverview    {Propiedades}
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
 * TODO: Description of {@code Propiedades}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Propiedades\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Propiedades implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdPropiedad;
    @Column(length = 100)
    private String strDescripcionPropiedad;
    @Column(length = 100)
    private String strGrupo;
    @Column(length = 100)
    private String strNombrePropiedad;
    @Column(length = 500)
    private String strValorPropiedad;

}
