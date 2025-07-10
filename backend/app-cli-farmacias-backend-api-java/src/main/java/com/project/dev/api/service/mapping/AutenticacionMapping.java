/*
 * @overview        {AutenticacionMapping}
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

import com.project.dev.api.domain.Autenticacion;
import com.project.dev.api.dto.AutenticacionDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code AutenticacionMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface AutenticacionMapping extends GenericMapping<AutenticacionDTO, Autenticacion> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "strUsuario", target = "strUsuario")
    @Override
    public Autenticacion getEntity(AutenticacionDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "strUsuario", target = "strUsuario")
    @Override
    public AutenticacionDTO getDto(Autenticacion entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default Autenticacion withId(String strId) {
        if (strId == null) {
            return null;
        }
        Autenticacion entity = new Autenticacion();
        entity.setStrUsuario(String.valueOf(strId));
        return entity;
    }
}
