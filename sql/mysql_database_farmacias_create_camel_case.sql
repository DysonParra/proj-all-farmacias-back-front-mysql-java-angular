DROP DATABASE IF EXISTS `farmacias`;
CREATE DATABASE IF NOT EXISTS `farmacias`;
USE `farmacias`;

CREATE TABLE IF NOT EXISTS `autenticacion` (
    `usuario`                           VARCHAR(30)         NOT NULL,
    `contrasena`                        VARCHAR(50)             NULL DEFAULT NULL,
    PRIMARY KEY (`usuario`)
);

CREATE TABLE IF NOT EXISTS `barrio` (
    `idBarrio`                          BIGINT(20)          NOT NULL,
    `idCiudad`                          BIGINT(20)              NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`idBarrio`)
);

CREATE TABLE IF NOT EXISTS `ciudad` (
    `idCiudad`                          BIGINT(20)          NOT NULL,
    `idDane`                            INT(11)                 NULL DEFAULT NULL,
    `idEstado`                          INT(11)                 NULL DEFAULT NULL,
    `estado`                            VARCHAR(200)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`idCiudad`)
);

CREATE TABLE IF NOT EXISTS `farmacia` (
    `codigoFarmacia`                    BIGINT(20)          NOT NULL,
    `idBarrio`                          BIGINT(20)              NULL DEFAULT NULL,
    `celular`                           VARCHAR(255)            NULL DEFAULT NULL,
    `nit`                               VARCHAR(20)             NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    `telefonoFijo`                      VARCHAR(20)             NULL DEFAULT NULL,
    `urlExtraccion`                     VARCHAR(4000)           NULL DEFAULT NULL,
    PRIMARY KEY (`codigoFarmacia`)
);

CREATE TABLE IF NOT EXISTS `farmacia_medicamento` (
    `id`                                BIGINT(20)          NOT NULL,
    `idFarmacia`                        BIGINT(20)              NULL DEFAULT NULL,
    `idMedicamento`                     BIGINT(20)              NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `laboratorio` (
    `idLaboratorio`                     BIGINT(20)          NOT NULL,
    `direccion`                         VARCHAR(200)            NULL DEFAULT NULL,
    `nit`                               VARCHAR(20)         NOT NULL,
    `nombre`                            VARCHAR(150)            NULL DEFAULT NULL,
    PRIMARY KEY (`idLaboratorio`)
);

CREATE TABLE IF NOT EXISTS `laboratorio_medicamento` (
    `id`                                BIGINT(20)          NOT NULL,
    `idLaboratorio`                     BIGINT(20)              NULL DEFAULT NULL,
    `idMedicamento`                     BIGINT(20)              NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `medicamento` (
    `id`                                BIGINT(20)          NOT NULL,
    `medicamentoPos`                    BIT(1)                  NULL DEFAULT NULL,
    `fechaCreacion`                     DATETIME                NULL DEFAULT NULL,
    `idLaboratorio`                     BIGINT(20)              NULL DEFAULT NULL,
    `accionTerapeutica`                 VARCHAR(200)            NULL DEFAULT NULL,
    `cantidad`                          VARCHAR(10)             NULL DEFAULT NULL,
    `codigoAtc`                         VARCHAR(100)            NULL DEFAULT NULL,
    `concentracion`                     VARCHAR(20)             NULL DEFAULT NULL,
    `ean`                               VARCHAR(100)            NULL DEFAULT NULL,
    `marca`                             VARCHAR(100)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(200)            NULL DEFAULT NULL,
    `nombreComercial`                   VARCHAR(100)            NULL DEFAULT NULL,
    `nombreGenerico`                    VARCHAR(60)             NULL DEFAULT NULL,
    `presentacion`                      VARCHAR(100)            NULL DEFAULT NULL,
    `principioActivo`                   VARCHAR(100)            NULL DEFAULT NULL,
    `registroInvima`                    VARCHAR(100)            NULL DEFAULT NULL,
    `unidadMedida`                      VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `medicamento_online` (
    `idMedicamento`                     BIGINT(20)          NOT NULL,
    `fechaDescarga`                     DATETIME                NULL DEFAULT NULL,
    `idPortalOrigen`                    BIGINT(20)              NULL DEFAULT NULL,
    `cantidad`                          VARCHAR(10)             NULL DEFAULT NULL,
    `concentracion`                     VARCHAR(100)            NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(500)            NULL DEFAULT NULL,
    `ean`                               VARCHAR(100)            NULL DEFAULT NULL,
    `imagen`                            VARCHAR(8000)           NULL DEFAULT NULL,
    `laboratorio`                       VARCHAR(100)            NULL DEFAULT NULL,
    `marca`                             VARCHAR(100)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(100)            NULL DEFAULT NULL,
    `paginaProducto`                    VARCHAR(30)             NULL DEFAULT NULL,
    `precioUnitario`                    VARCHAR(20)             NULL DEFAULT NULL,
    `presentacion`                      VARCHAR(100)            NULL DEFAULT NULL,
    `principioActivo`                   VARCHAR(100)            NULL DEFAULT NULL,
    `registroInvima`                    VARCHAR(100)            NULL DEFAULT NULL,
    PRIMARY KEY (`idMedicamento`)
);

CREATE TABLE IF NOT EXISTS `persona` (
    `idPersona`                         BIGINT(20)          NOT NULL,
    `idBarrio`                          BIGINT(20)              NULL DEFAULT NULL,
    `idTipoPersona`                     BIGINT(20)              NULL DEFAULT NULL,
    `apellidoPersona`                   VARCHAR(70)             NULL DEFAULT NULL,
    `direccion`                         VARCHAR(200)            NULL DEFAULT NULL,
    `genero`                            VARCHAR(20)             NULL DEFAULT NULL,
    `nombrePersona`                     VARCHAR(70)             NULL DEFAULT NULL,
    `telefono`                          VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`idPersona`)
);

CREATE TABLE IF NOT EXISTS `propiedades` (
    `idPropiedad`                       BIGINT(20)          NOT NULL,
    `descripcionPropiedad`              VARCHAR(100)            NULL DEFAULT NULL,
    `grupo`                             VARCHAR(100)            NULL DEFAULT NULL,
    `nombrePropiedad`                   VARCHAR(100)            NULL DEFAULT NULL,
    `valorPropiedad`                    VARCHAR(500)            NULL DEFAULT NULL,
    PRIMARY KEY (`idPropiedad`)
);

CREATE TABLE IF NOT EXISTS `tipo_persona` (
    `idTipoPersona`                     BIGINT(20)          NOT NULL,
    `descripcion`                       VARCHAR(200)            NULL DEFAULT NULL,
    `nombre`                            VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`idTipoPersona`)
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Barrio`
    ADD INDEX `fkBarrioIdCiudadIdx` (`idCiudad` ASC),
    ADD CONSTRAINT `fkBarrioIdCiudad`
        FOREIGN KEY (`idCiudad`)
        REFERENCES `Ciudad` (`idCiudad`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Farmacia`
    ADD INDEX `fkFarmaciaIdBarrioIdx` (`idBarrio` ASC),
    ADD CONSTRAINT `fkFarmaciaIdBarrio`
        FOREIGN KEY (`idBarrio`)
        REFERENCES `Barrio` (`idBarrio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `MedicamentoOnline`
    ADD INDEX `fkMedicamentoOnlineIdPortalOrigenIdx` (`idPortalOrigen` ASC),
    ADD CONSTRAINT `fkMedicamentoOnlineIdPortalOrigen`
        FOREIGN KEY (`idPortalOrigen`)
        REFERENCES `Farmacia` (`codigoFarmacia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `FarmaciaMedicamento`
    ADD INDEX `fkFarmaciaMedicamentoIdFarmaciaIdx` (`idFarmacia` ASC),
    ADD CONSTRAINT `fkFarmaciaMedicamentoIdFarmacia`
        FOREIGN KEY (`idFarmacia`)
        REFERENCES `Farmacia` (`codigoFarmacia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkFarmaciaMedicamentoIdMedicamentoIdx` (`idMedicamento` ASC),
    ADD CONSTRAINT `fkFarmaciaMedicamentoIdMedicamento`
        FOREIGN KEY (`idMedicamento`)
        REFERENCES `Medicamento` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `LaboratorioMedicamento`
    ADD INDEX `fkLaboratorioMedicamentoIdLaboratorioIdx` (`idLaboratorio` ASC),
    ADD CONSTRAINT `fkLaboratorioMedicamentoIdLaboratorio`
        FOREIGN KEY (`idLaboratorio`)
        REFERENCES `Laboratorio` (`idLaboratorio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkLaboratorioMedicamentoIdMedicamentoIdx` (`idMedicamento` ASC),
    ADD CONSTRAINT `fkLaboratorioMedicamentoIdMedicamento`
        FOREIGN KEY (`idMedicamento`)
        REFERENCES `Medicamento` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Persona`
    ADD INDEX `fkPersonaIdTipoPersonaIdx` (`idTipoPersona` ASC),
    ADD CONSTRAINT `fkPersonaIdTipoPersona`
        FOREIGN KEY (`idTipoPersona`)
        REFERENCES `TipoPersona` (`idTipoPersona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkPersonaIdBarrioIdx` (`idBarrio` ASC),
    ADD CONSTRAINT `fkPersonaIdBarrio`
        FOREIGN KEY (`idBarrio`)
        REFERENCES `Barrio` (`idBarrio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
