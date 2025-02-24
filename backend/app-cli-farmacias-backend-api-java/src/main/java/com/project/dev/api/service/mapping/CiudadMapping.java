/*
 * @fileoverview    {CiudadMapping}
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
package com.project.dev.api.service.mapping;

import com.project.dev.api.domain.Ciudad;
import com.project.dev.api.dto.CiudadDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code CiudadMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CiudadMapping extends GenericMapping<CiudadDTO, Ciudad> {

    /**
     * Obtiene una entidad en base a su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdCiudad", target = "intIdCiudad")
    @Override
    public Ciudad getEntity(CiudadDTO dto);

    /**
     * Obtiene un DTO en base a su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    @Mapping(source = "intIdCiudad", target = "intIdCiudad")
    @Override
    public CiudadDTO getDto(Ciudad entity);

    /**
     * TODO: Description of {@code withId}.
     *
     * @param strId
     * @return
     */
    public default Ciudad withId(String strId) {
        if (strId == null) {
            return null;
        }
        Ciudad entity = new Ciudad();
        entity.setIntIdCiudad(Long.parseLong(strId));
        return entity;
    }
}
