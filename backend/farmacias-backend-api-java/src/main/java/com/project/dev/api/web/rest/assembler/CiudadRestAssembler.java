/*
 * @fileoverview    {CiudadRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.CiudadDTO;
import com.project.dev.api.web.rest.CiudadRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code CiudadRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class CiudadRestAssembler implements RepresentationModelAssembler<CiudadDTO, EntityModel<CiudadDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<CiudadDTO> toModel(CiudadDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CiudadRest.class).getEntity(String.valueOf(entityDTO.getIntIdCiudad()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CiudadRest.class).getAllEntities()).withRel("Ciudad"));
    }
}
