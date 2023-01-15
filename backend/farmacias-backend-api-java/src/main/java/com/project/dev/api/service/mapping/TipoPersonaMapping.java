/*
 * @fileoverview    {TipoPersonaMapping} se encarga de realizar tareas específicas.
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
package com.project.dev.api.service.mapping;

import com.project.dev.api.domain.TipoPersona;
import com.project.dev.api.dto.TipoPersonaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Definición de {@code TipoPersonaMapping}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TipoPersonaMapping extends GenericMapping<TipoPersonaDTO, TipoPersona> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoPersona", target = "intIdTipoPersona")
    @Override
    public TipoPersona getEntity(TipoPersonaDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoPersona", target = "intIdTipoPersona")
    @Override
    public TipoPersonaDTO obtenerDto(TipoPersona entity);

    /**
     * TODO: Definición de {@code withId}.
     *
     * @param strId
     * @return
     */
    public default TipoPersona withId(String strId) {
        if (strId == null) {
            return null;
        }
        TipoPersona entity = new TipoPersona();
        entity.setIntIdTipoPersona(Long.parseLong(strId));
        return entity;
    }
}
