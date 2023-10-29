/*
 * @fileoverview    {LaboratorioRest}
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
package com.project.dev.api.web.rest;

import com.project.dev.api.dto.LaboratorioDTO;
import com.project.dev.api.service.implementation.LaboratorioServiceImpl;
import com.project.dev.api.web.rest.assembler.LaboratorioRestAssembler;
import com.project.dev.api.web.rest.util.PaginationUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

/**
 * TODO: Description of {@code LaboratorioRest}.
 *
 * @author Dyson Parra
 * @since 11
 */
@RestController
@RequestMapping(value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(value = "Laboratorio API")
public class LaboratorioRest {

    private final Logger log = LoggerFactory.getLogger(LaboratorioRest.class);
    private final LaboratorioServiceImpl entityService;
    private final LaboratorioRestAssembler entityRestAssembler;

    /**
     * Constructor.
     *
     * @param entityService       servicio de la entidad.
     * @param entityRestAssembler ensamblador de recurso de la entidad.
     */
    public LaboratorioRest(LaboratorioServiceImpl entityService,
            LaboratorioRestAssembler entityRestAssembler) {
        this.entityService = entityService;
        this.entityRestAssembler = entityRestAssembler;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     */
    @ApiOperation(value = "Lista las [Entidades] existentes", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/Laboratorio")
    public CollectionModel<EntityModel<LaboratorioDTO>> getAllEntities() {
        log.debug("REST request to get all entities type Laboratorio");
        List<EntityModel<LaboratorioDTO>> entities = null;
        try {
            entities = this.entityService.getAllEntities().parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<LaboratorioDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(LaboratorioRest.class).getAllEntities()).withSelfRel());
            return entitiesCollection;
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

    /**
     * Obtiene todas los registros según la paginación suministrada.
     *
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos de forma paginada.
     */
    @ApiOperation(value = "Lista las [Entidades] existentes paginadas", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/Laboratorio/pages")
    public ResponseEntity<CollectionModel<EntityModel<LaboratorioDTO>>> getAllEntitiesPaged(Pageable pageable) {
        log.debug("REST request to get a page of all entities type Laboratorio");
        Page<LaboratorioDTO> page = null;
        List<EntityModel<LaboratorioDTO>> entities = null;
        try {
            page = entityService.getAllEntitiesPaged(pageable);
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/Laboratorio/pages");
            entities = page.getContent().parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<LaboratorioDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(LaboratorioRest.class).getAllEntities()).withSelfRel());
            return new ResponseEntity<>(entitiesCollection, headers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

    /**
     * Guarda los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @return entidad almacenada en la base de datos.
     */
    @ApiOperation(value = "Guarda la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @PostMapping("/Laboratorio")
    public ResponseEntity<?> saveEntity(@RequestBody LaboratorioDTO entityDTO) {
        log.debug("POST request to save a new entity type Laboratorio");
        EntityModel<LaboratorioDTO> resource = null;
        try {
            resource = entityRestAssembler.toModel(entityService.saveUpdate(entityDTO));
            return ResponseEntity
                    .created(new URI(resource.getLink("self").orElse(new Link("self")).getHref()))
                    .body(resource);
        } catch (Exception e) {
            log.warn("Ocurrio un error en la llamada REST saveEntity", e);
            return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * Actualiza los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @param id        es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     */
    @ApiOperation(value = "Actualiza la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @PutMapping("/Laboratorio/{id}")
    public ResponseEntity<?> updateEntity(@RequestBody LaboratorioDTO entityDTO, @PathVariable String id) {
        return saveEntity(entityDTO);
    }

    /**
     * Obtiene la entidad según el id suministrado.
     *
     * @param id es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     */
    @ApiOperation(value = "Lista la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/Laboratorio/{id}")
    public ResponseEntity<EntityModel<LaboratorioDTO>> getEntity(@PathVariable String id) {
        log.debug(String.format("REST request to get the entity type Laboratorio with id {} ", id));
        try {
            return Optional.of(this.entityService.getEntity(id))
                    .map(u -> new ResponseEntity<>(entityRestAssembler.toModel(u), HttpStatus.OK))
                    .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
        } catch (Exception e) {
            log.error("Ocurrio un error en la llamada REST getEntity", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Elimina los datos de una entidad.
     *
     * @param id identificador de la entidad que va a ser eliminada.
     * @return respuesta indicando si se eliminó la entidad.
     */
    @ApiOperation(value = "Elimina la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @DeleteMapping("/Laboratorio/{id}")
    public ResponseEntity<?> deleteEntity(@PathVariable String id) {
        log.debug("DELETE request to delete the entity Laboratorio with id : {}", id);
        try {
            entityService.deleteEntity(id);
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return ResponseEntity.noContent().build();
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda suministrada.
     *
     * @param query indica la búsqueda que se hará en la base de datos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @ApiOperation(value = "Lista la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/Laboratorio/search/{query}")
    public CollectionModel<EntityModel<LaboratorioDTO>> searchEntities(@PathVariable String query) {
        log.debug("REST request to get the entities type Laboratorio with the search : {} ", query);
        List<EntityModel<LaboratorioDTO>> entities = null;
        try {
            entities = this.entityService.searchEntities(query).parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<LaboratorioDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(LaboratorioRest.class).getAllEntities()).withSelfRel());
            return entitiesCollection;
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda y paginación suministradas.
     *
     * @param query    indica la búsqueda que se hará en la base de datos.
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @ApiOperation(value = "Lista las [Entidades] existentes paginadas", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/Laboratorio/search/{query}/pages")
    public ResponseEntity<CollectionModel<EntityModel<LaboratorioDTO>>> searchEntitiesPaged(@PathVariable String query, Pageable pageable) {
        log.debug("REST request to get a page of the entities type Laboratorio with the search : {}", query);
        Page<LaboratorioDTO> page = null;
        List<EntityModel<LaboratorioDTO>> entities = null;
        try {
            page = entityService.searchEntitiesPaged(query, pageable);
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/Laboratorio/search/{query}/pages/" + query);
            entities = page.getContent().parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<LaboratorioDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(LaboratorioRest.class).getAllEntities()).withSelfRel());
            return new ResponseEntity<>(entitiesCollection, headers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

}
