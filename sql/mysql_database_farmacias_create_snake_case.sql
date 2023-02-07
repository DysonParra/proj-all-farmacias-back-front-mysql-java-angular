DROP DATABASE IF EXISTS `farmacias`;
CREATE DATABASE IF NOT EXISTS `farmacias`;
USE `farmacias`;

CREATE TABLE IF NOT EXISTS `autenticacion` (
    `usuario`                           VARCHAR(30)         NOT NULL,
    `contrasena`                        VARCHAR(50)             NULL DEFAULT NULL,
    PRIMARY KEY (`usuario`)
);

CREATE TABLE IF NOT EXISTS `barrio` (
    `id_barrio`                         BIGINT(20)          NOT NULL,
    `id_ciudad`                         BIGINT(20)              NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`id_barrio`)
);

CREATE TABLE IF NOT EXISTS `ciudad` (
    `id_ciudad`                         BIGINT(20)          NOT NULL,
    `id_dane`                           INT(11)                 NULL DEFAULT NULL,
    `id_estado`                         INT(11)                 NULL DEFAULT NULL,
    `estado`                            VARCHAR(200)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`id_ciudad`)
);

CREATE TABLE IF NOT EXISTS `farmacia` (
    `codigo_farmacia`                   BIGINT(20)          NOT NULL,
    `id_barrio`                         BIGINT(20)              NULL DEFAULT NULL,
    `celular`                           VARCHAR(255)            NULL DEFAULT NULL,
    `nit`                               VARCHAR(20)             NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    `telefono_fijo`                     VARCHAR(20)             NULL DEFAULT NULL,
    `url_extraccion`                    VARCHAR(4000)           NULL DEFAULT NULL,
    PRIMARY KEY (`codigo_farmacia`)
);

CREATE TABLE IF NOT EXISTS `farmacia_medicamento` (
    `id`                                BIGINT(20)          NOT NULL,
    `id_farmacia`                       BIGINT(20)              NULL DEFAULT NULL,
    `id_medicamento`                    BIGINT(20)              NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `laboratorio` (
    `id_laboratorio`                    BIGINT(20)          NOT NULL,
    `direccion`                         VARCHAR(200)            NULL DEFAULT NULL,
    `nit`                               VARCHAR(20)         NOT NULL,
    `nombre`                            VARCHAR(150)            NULL DEFAULT NULL,
    PRIMARY KEY (`id_laboratorio`)
);

CREATE TABLE IF NOT EXISTS `laboratorio_medicamento` (
    `id`                                BIGINT(20)          NOT NULL,
    `id_laboratorio`                    BIGINT(20)              NULL DEFAULT NULL,
    `id_medicamento`                    BIGINT(20)              NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `medicamento` (
    `id`                                BIGINT(20)          NOT NULL,
    `medicamento_pos`                   BIT(1)                  NULL DEFAULT NULL,
    `fecha_creacion`                    DATETIME                NULL DEFAULT NULL,
    `id_laboratorio`                    BIGINT(20)              NULL DEFAULT NULL,
    `accion_terapeutica`                VARCHAR(200)            NULL DEFAULT NULL,
    `cantidad`                          VARCHAR(10)             NULL DEFAULT NULL,
    `codigo_atc`                        VARCHAR(100)            NULL DEFAULT NULL,
    `concentracion`                     VARCHAR(20)             NULL DEFAULT NULL,
    `ean`                               VARCHAR(100)            NULL DEFAULT NULL,
    `marca`                             VARCHAR(100)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    `nombre_comercial`                  VARCHAR(100)            NULL DEFAULT NULL,
    `nombre_generico`                   VARCHAR(60)             NULL DEFAULT NULL,
    `presentacion`                      VARCHAR(100)            NULL DEFAULT NULL,
    `principio_activo`                  VARCHAR(100)            NULL DEFAULT NULL,
    `registro_invima`                   VARCHAR(100)            NULL DEFAULT NULL,
    `unidad_medida`                     VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `medicamento_online` (
    `id_medicamento`                    BIGINT(20)          NOT NULL,
    `fecha_descarga`                    DATETIME                NULL DEFAULT NULL,
    `id_portal_origen`                  BIGINT(20)              NULL DEFAULT NULL,
    `cantidad`                          VARCHAR(10)             NULL DEFAULT NULL,
    `concentracion`                     VARCHAR(100)            NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(500)            NULL DEFAULT NULL,
    `ean`                               VARCHAR(100)            NULL DEFAULT NULL,
    `imagen`                            VARCHAR(8000)           NULL DEFAULT NULL,
    `laboratorio`                       VARCHAR(100)            NULL DEFAULT NULL,
    `marca`                             VARCHAR(100)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(100)            NULL DEFAULT NULL,
    `pagina_producto`                   VARCHAR(30)             NULL DEFAULT NULL,
    `precio_unitario`                   VARCHAR(20)             NULL DEFAULT NULL,
    `presentacion`                      VARCHAR(100)            NULL DEFAULT NULL,
    `principio_activo`                  VARCHAR(100)            NULL DEFAULT NULL,
    `registro_invima`                   VARCHAR(100)            NULL DEFAULT NULL,
    PRIMARY KEY (`id_medicamento`)
);

CREATE TABLE IF NOT EXISTS `persona` (
    `id_persona`                        BIGINT(20)          NOT NULL,
    `id_barrio`                         BIGINT(20)              NULL DEFAULT NULL,
    `id_tipo_persona`                   BIGINT(20)              NULL DEFAULT NULL,
    `apellido_persona`                  VARCHAR(70)             NULL DEFAULT NULL,
    `direccion`                         VARCHAR(200)            NULL DEFAULT NULL,
    `genero`                            VARCHAR(20)             NULL DEFAULT NULL,
    `nombre_persona`                    VARCHAR(70)             NULL DEFAULT NULL,
    `telefono`                          VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`id_persona`)
);

CREATE TABLE IF NOT EXISTS `propiedades` (
    `id_propiedad`                      BIGINT(20)          NOT NULL,
    `descripcion_propiedad`             VARCHAR(100)            NULL DEFAULT NULL,
    `grupo`                             VARCHAR(100)            NULL DEFAULT NULL,
    `nombre_propiedad`                  VARCHAR(100)            NULL DEFAULT NULL,
    `valor_propiedad`                   VARCHAR(500)            NULL DEFAULT NULL,
    PRIMARY KEY (`id_propiedad`)
);

CREATE TABLE IF NOT EXISTS `tipo_persona` (
    `id_tipo_persona`                   BIGINT(20)          NOT NULL,
    `descripcion`                       VARCHAR(200)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`id_tipo_persona`)
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `barrio`
    ADD INDEX `fk_barrio_id_ciudad_idx` (`id_ciudad` ASC),
    ADD CONSTRAINT `fk_barrio_id_ciudad`
        FOREIGN KEY (`id_ciudad`)
        REFERENCES `ciudad` (`id_ciudad`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `farmacia`
    ADD INDEX `fk_farmacia_id_barrio_idx` (`id_barrio` ASC),
    ADD CONSTRAINT `fk_farmacia_id_barrio`
        FOREIGN KEY (`id_barrio`)
        REFERENCES `barrio` (`id_barrio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `medicamento_online`
    ADD INDEX `fk_medicamento_online_id_portal_origen_idx` (`id_portal_origen` ASC),
    ADD CONSTRAINT `fk_medicamento_online_id_portal_origen`
        FOREIGN KEY (`id_portal_origen`)
        REFERENCES `farmacia` (`codigo_farmacia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `farmacia_medicamento`
    ADD INDEX `fk_farmacia_medicamento_id_farmacia_idx` (`id_farmacia` ASC),
    ADD CONSTRAINT `fk_farmacia_medicamento_id_farmacia`
        FOREIGN KEY (`id_farmacia`)
        REFERENCES `farmacia` (`codigo_farmacia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fk_farmacia_medicamento_id_medicamento_idx` (`id_medicamento` ASC),
    ADD CONSTRAINT `fk_farmacia_medicamento_id_medicamento`
        FOREIGN KEY (`id_medicamento`)
        REFERENCES `medicamento` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `laboratorio_medicamento`
    ADD INDEX `fk_laboratorio_medicamento_id_laboratorio_idx` (`id_laboratorio` ASC),
    ADD CONSTRAINT `fk_laboratorio_medicamento_id_laboratorio`
        FOREIGN KEY (`id_laboratorio`)
        REFERENCES `laboratorio` (`id_laboratorio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fk_laboratorio_medicamento_id_medicamento_idx` (`id_medicamento` ASC),
    ADD CONSTRAINT `fk_laboratorio_medicamento_id_medicamento`
        FOREIGN KEY (`id_medicamento`)
        REFERENCES `medicamento` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `persona`
    ADD INDEX `fk_persona_id_tipo_persona_idx` (`id_tipo_persona` ASC),
    ADD CONSTRAINT `fk_persona_id_tipo_persona`
        FOREIGN KEY (`id_tipo_persona`)
        REFERENCES `tipo_persona` (`id_tipo_persona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fk_persona_id_barrio_idx` (`id_barrio` ASC),
    ADD CONSTRAINT `fk_persona_id_barrio`
        FOREIGN KEY (`id_barrio`)
        REFERENCES `barrio` (`id_barrio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
