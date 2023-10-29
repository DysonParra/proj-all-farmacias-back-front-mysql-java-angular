/*
 * @fileoverview    {FarmaciaRestAssembler}
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

import com.project.dev.api.dto.FarmaciaDTO;
import com.project.dev.api.web.rest.FarmaciaRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code FarmaciaRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class FarmaciaRestAssembler implements RepresentationModelAssembler<FarmaciaDTO, EntityModel<FarmaciaDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<FarmaciaDTO> toModel(FarmaciaDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(FarmaciaRest.class).getEntity(String.valueOf(entityDTO.getIntCodigoFarmacia()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(FarmaciaRest.class).getAllEntities()).withRel("Farmacia"));
    }
}
