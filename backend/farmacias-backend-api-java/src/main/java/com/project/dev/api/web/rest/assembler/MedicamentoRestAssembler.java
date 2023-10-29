/*
 * @fileoverview    {MedicamentoRestAssembler}
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

import com.project.dev.api.dto.MedicamentoDTO;
import com.project.dev.api.web.rest.MedicamentoRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code MedicamentoRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class MedicamentoRestAssembler implements RepresentationModelAssembler<MedicamentoDTO, EntityModel<MedicamentoDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<MedicamentoDTO> toModel(MedicamentoDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MedicamentoRest.class).getEntity(String.valueOf(entityDTO.getIntId()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MedicamentoRest.class).getAllEntities()).withRel("Medicamento"));
    }
}
