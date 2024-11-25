/*
 * @fileoverview    {PersonaMapping}
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

import com.project.dev.api.domain.Persona;
import com.project.dev.api.dto.PersonaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code PersonaMapping}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PersonaMapping extends GenericMapping<PersonaDTO, Persona> {

    /**
     * Obtiene una entidad en base a su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdPersona", target = "intIdPersona")
    @Override
    public Persona getEntity(PersonaDTO dto);

    /**
     * Obtiene un DTO en base a su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    @Mapping(source = "intIdPersona", target = "intIdPersona")
    @Override
    public PersonaDTO getDto(Persona entity);

    /**
     * TODO: Description of {@code withId}.
     *
     * @param strId
     * @return
     */
    public default Persona withId(String strId) {
        if (strId == null) {
            return null;
        }
        Persona entity = new Persona();
        entity.setIntIdPersona(Long.parseLong(strId));
        return entity;
    }
}
