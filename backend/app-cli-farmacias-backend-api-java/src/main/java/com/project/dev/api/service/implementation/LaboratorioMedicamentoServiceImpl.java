/*
 * @fileoverview    {LaboratorioMedicamentoServiceImpl}
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
package com.project.dev.api.service.implementation;

import com.project.dev.api.domain.LaboratorioMedicamento;
import com.project.dev.api.dto.LaboratorioMedicamentoDTO;
import com.project.dev.api.repository.LaboratorioMedicamentoRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.LaboratorioMedicamentoMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Description of {@code LaboratorioMedicamentoServiceImpl}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Transactional
@org.springframework.stereotype.Service
public class LaboratorioMedicamentoServiceImpl implements GenericService<LaboratorioMedicamentoDTO> {

    private final Logger log = LoggerFactory.getLogger(LaboratorioMedicamentoServiceImpl.class);
    private final LaboratorioMedicamentoRepository entityRepository;
    private final LaboratorioMedicamentoMapping entityMapping = Mappers.getMapper(LaboratorioMedicamentoMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public LaboratorioMedicamentoServiceImpl(LaboratorioMedicamentoRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<LaboratorioMedicamentoDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo LaboratorioMedicamento");
        return entityMapping.getDto(entityRepository.findAll());
    }

    /**
     * Obtiene todas los registros según la paginación suministrada.
     *
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos de forma paginada.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public Page<LaboratorioMedicamentoDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo LaboratorioMedicamento con paginacion");
        return entityRepository.findAll(pageable).map(entityMapping::getDto);
    }

    /**
     * Guarda o actualiza los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @return entidad almacenada en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public LaboratorioMedicamentoDTO saveUpdate(LaboratorioMedicamentoDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo LaboratorioMedicamento: {}", entityDTO);

        //TODO: agregar validacion especifica del servicio.
        LaboratorioMedicamento entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        LaboratorioMedicamentoDTO currrentEntity = entityMapping.getDto(entity);
        return currrentEntity;
    }

    /**
     * Obtiene la entidad según el id suministrado.
     *
     * @param id es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public LaboratorioMedicamentoDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo LaboratorioMedicamento: {}", id);
        LaboratorioMedicamento searchedEntity = entityRepository.findById(Long.parseLong(id))
                .orElseThrow(() -> new EntityNotFoundException(id));
        return entityMapping.getDto(searchedEntity);
    }

    /**
     * Elimina los datos de una entidad.
     *
     * @param id identificador de la entidad que va a ser eliminada.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public void deleteEntity(String id) throws Exception {
        log.debug("Solicitud para eliminar la entidad tipo LaboratorioMedicamento: {}", id);
        entityRepository.deleteById(Long.parseLong(id));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda suministrada.
     *
     * @param query indica la búsqueda que se hará en la base de datos.
     * @return entidades almacenadas en base de datos encontradas.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<LaboratorioMedicamentoDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo LaboratorioMedicamento: {}", query);
        return entityMapping.getDto(entityRepository.searchEntities(query));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda y paginación suministradas.
     *
     * @param query    indica la búsqueda que se hará en la base de datos.
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @Transactional(readOnly = true)
    @Override
    public Page<LaboratorioMedicamentoDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo LaboratorioMedicamento para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
