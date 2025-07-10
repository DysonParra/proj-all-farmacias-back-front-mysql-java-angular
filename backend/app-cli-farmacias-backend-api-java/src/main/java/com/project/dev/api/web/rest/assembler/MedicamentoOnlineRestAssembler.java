/*
 * @overview        {MedicamentoOnlineRestAssembler}
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

import com.project.dev.api.dto.MedicamentoOnlineDTO;
import com.project.dev.api.web.rest.MedicamentoOnlineRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Description of {@code MedicamentoOnlineRestAssembler}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Component
public class MedicamentoOnlineRestAssembler implements RepresentationModelAssembler<MedicamentoOnlineDTO, EntityModel<MedicamentoOnlineDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<MedicamentoOnlineDTO> toModel(MedicamentoOnlineDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MedicamentoOnlineRest.class).getEntity(String.valueOf(entityDTO.getIntIdMedicamento()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MedicamentoOnlineRest.class).getAllEntities()).withRel("MedicamentoOnline"));
    }
}
