DROP DATABASE IF EXISTS `farmacias`;
CREATE DATABASE IF NOT EXISTS `farmacias`;
USE `farmacias`;

CREATE TABLE IF NOT EXISTS `autenticacion` (
    `strUsuario`                        VARCHAR(30)         NOT NULL,
    `strContrasena`                     VARCHAR(50)             NULL DEFAULT NULL,
    PRIMARY KEY (`strUsuario`)
);

CREATE TABLE IF NOT EXISTS `barrio` (
    `intIdBarrio`                       BIGINT(20)          NOT NULL,
    `intIdCiudad`                       BIGINT(20)              NULL DEFAULT NULL,
    `strNombre`                         VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`intIdBarrio`)
);

CREATE TABLE IF NOT EXISTS `ciudad` (
    `intIdCiudad`                       BIGINT(20)          NOT NULL,
    `intIdDane`                         INT(11)                 NULL DEFAULT NULL,
    `intIdEstado`                       INT(11)                 NULL DEFAULT NULL,
    `strEstado`                         VARCHAR(200)            NULL DEFAULT NULL,
    `strNombre`                         VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`intIdCiudad`)
);

CREATE TABLE IF NOT EXISTS `farmacia` (
    `intCodigoFarmacia`                 BIGINT(20)          NOT NULL,
    `intIdBarrio`                       BIGINT(20)              NULL DEFAULT NULL,
    `strCelular`                        VARCHAR(255)            NULL DEFAULT NULL,
    `strNit`                            VARCHAR(20)             NULL DEFAULT NULL,
    `strNombre`                         VARCHAR(200)            NULL DEFAULT NULL,
    `strTelefonoFijo`                   VARCHAR(20)             NULL DEFAULT NULL,
    `strUrlExtraccion`                  VARCHAR(4000)           NULL DEFAULT NULL,
    PRIMARY KEY (`intCodigoFarmacia`)
);

CREATE TABLE IF NOT EXISTS `farmacia_medicamento` (
    `intId`                             BIGINT(20)          NOT NULL,
    `intIdFarmacia`                     BIGINT(20)              NULL DEFAULT NULL,
    `intIdMedicamento`                  BIGINT(20)              NULL DEFAULT NULL,
    PRIMARY KEY (`intId`)
);

CREATE TABLE IF NOT EXISTS `laboratorio` (
    `intIdLaboratorio`                  BIGINT(20)          NOT NULL,
    `strDireccion`                      VARCHAR(200)            NULL DEFAULT NULL,
    `strNit`                            VARCHAR(20)         NOT NULL,
    `strNombre`                         VARCHAR(150)            NULL DEFAULT NULL,
    PRIMARY KEY (`intIdLaboratorio`)
);

CREATE TABLE IF NOT EXISTS `laboratorio_medicamento` (
    `intId`                             BIGINT(20)          NOT NULL,
    `intIdLaboratorio`                  BIGINT(20)              NULL DEFAULT NULL,
    `intIdMedicamento`                  BIGINT(20)              NULL DEFAULT NULL,
    PRIMARY KEY (`intId`)
);

CREATE TABLE IF NOT EXISTS `medicamento` (
    `intId`                             BIGINT(20)          NOT NULL,
    `bitMedicamentoPos`                 BIT(1)                  NULL DEFAULT NULL,
    `dtFechaCreacion`                   DATETIME                NULL DEFAULT NULL,
    `intIdLaboratorio`                  BIGINT(20)              NULL DEFAULT NULL,
    `strAccionTerapeutica`              VARCHAR(200)            NULL DEFAULT NULL,
    `strCantidad`                       VARCHAR(10)             NULL DEFAULT NULL,
    `strCodigoAtc`                      VARCHAR(100)            NULL DEFAULT NULL,
    `strConcentracion`                  VARCHAR(20)             NULL DEFAULT NULL,
    `strEan`                            VARCHAR(100)            NULL DEFAULT NULL,
    `strMarca`                          VARCHAR(100)            NULL DEFAULT NULL,
    `strNombre`                         VARCHAR(200)            NULL DEFAULT NULL,
    `strNombreComercial`                VARCHAR(100)            NULL DEFAULT NULL,
    `strNombreGenerico`                 VARCHAR(60)             NULL DEFAULT NULL,
    `strPresentacion`                   VARCHAR(100)            NULL DEFAULT NULL,
    `strPrincipioActivo`                VARCHAR(100)            NULL DEFAULT NULL,
    `strRegistroInvima`                 VARCHAR(100)            NULL DEFAULT NULL,
    `strUnidadMedida`                   VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`intId`)
);

CREATE TABLE IF NOT EXISTS `medicamento_online` (
    `intIdMedicamento`                  BIGINT(20)          NOT NULL,
    `dtFechaDescarga`                   DATETIME                NULL DEFAULT NULL,
    `intIdPortalOrigen`                 BIGINT(20)              NULL DEFAULT NULL,
    `strCantidad`                       VARCHAR(10)             NULL DEFAULT NULL,
    `strConcentracion`                  VARCHAR(100)            NULL DEFAULT NULL,
    `strDescripcion`                    VARCHAR(500)            NULL DEFAULT NULL,
    `strEan`                            VARCHAR(100)            NULL DEFAULT NULL,
    `strImagen`                         VARCHAR(8000)           NULL DEFAULT NULL,
    `strLaboratorio`                    VARCHAR(100)            NULL DEFAULT NULL,
    `strMarca`                          VARCHAR(100)            NULL DEFAULT NULL,
    `strNombre`                         VARCHAR(100)            NULL DEFAULT NULL,
    `strPaginaProducto`                 VARCHAR(30)             NULL DEFAULT NULL,
    `strPrecioUnitario`                 VARCHAR(20)             NULL DEFAULT NULL,
    `strPresentacion`                   VARCHAR(100)            NULL DEFAULT NULL,
    `strPrincipioActivo`                VARCHAR(100)            NULL DEFAULT NULL,
    `strRegistroInvima`                 VARCHAR(100)            NULL DEFAULT NULL,
    PRIMARY KEY (`intIdMedicamento`)
);

CREATE TABLE IF NOT EXISTS `persona` (
    `intIdPersona`                      BIGINT(20)          NOT NULL,
    `intIdBarrio`                       BIGINT(20)              NULL DEFAULT NULL,
    `intIdTipoPersona`                  BIGINT(20)              NULL DEFAULT NULL,
    `strApellidoPersona`                VARCHAR(70)             NULL DEFAULT NULL,
    `strDireccion`                      VARCHAR(200)            NULL DEFAULT NULL,
    `strGenero`                         VARCHAR(20)             NULL DEFAULT NULL,
    `strNombrePersona`                  VARCHAR(70)             NULL DEFAULT NULL,
    `strTelefono`                       VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`intIdPersona`)
);

CREATE TABLE IF NOT EXISTS `propiedades` (
    `intIdPropiedad`                    BIGINT(20)          NOT NULL,
    `strDescripcionPropiedad`           VARCHAR(100)            NULL DEFAULT NULL,
    `strGrupo`                          VARCHAR(100)            NULL DEFAULT NULL,
    `strNombrePropiedad`                VARCHAR(100)            NULL DEFAULT NULL,
    `strValorPropiedad`                 VARCHAR(500)            NULL DEFAULT NULL,
    PRIMARY KEY (`intIdPropiedad`)
);

CREATE TABLE IF NOT EXISTS `tipo_persona` (
    `intIdTipoPersona`                  BIGINT(20)          NOT NULL,
    `strDescripcion`                    VARCHAR(200)            NULL DEFAULT NULL,
    `strNombre`                         VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`intIdTipoPersona`)
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Barrio`
    ADD INDEX `fkBarrioIdCiudadIdx` (`intIdCiudad` ASC),
    ADD CONSTRAINT `fkBarrioIdCiudad`
        FOREIGN KEY (`intIdCiudad`)
        REFERENCES `Ciudad` (`intIdCiudad`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Farmacia`
    ADD INDEX `fkFarmaciaIdBarrioIdx` (`intIdBarrio` ASC),
    ADD CONSTRAINT `fkFarmaciaIdBarrio`
        FOREIGN KEY (`intIdBarrio`)
        REFERENCES `Barrio` (`intIdBarrio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `MedicamentoOnline`
    ADD INDEX `fkMedicamentoOnlineIdPortalOrigenIdx` (`intIdPortalOrigen` ASC),
    ADD CONSTRAINT `fkMedicamentoOnlineIdPortalOrigen`
        FOREIGN KEY (`intIdPortalOrigen`)
        REFERENCES `Farmacia` (`intCodigoFarmacia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `FarmaciaMedicamento`
    ADD INDEX `fkFarmaciaMedicamentoIdFarmaciaIdx` (`intIdFarmacia` ASC),
    ADD CONSTRAINT `fkFarmaciaMedicamentoIdFarmacia`
        FOREIGN KEY (`intIdFarmacia`)
        REFERENCES `Farmacia` (`intCodigoFarmacia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkFarmaciaMedicamentoIdMedicamentoIdx` (`intIdMedicamento` ASC),
    ADD CONSTRAINT `fkFarmaciaMedicamentoIdMedicamento`
        FOREIGN KEY (`intIdMedicamento`)
        REFERENCES `Medicamento` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `LaboratorioMedicamento`
    ADD INDEX `fkLaboratorioMedicamentoIdLaboratorioIdx` (`intIdLaboratorio` ASC),
    ADD CONSTRAINT `fkLaboratorioMedicamentoIdLaboratorio`
        FOREIGN KEY (`intIdLaboratorio`)
        REFERENCES `Laboratorio` (`intIdLaboratorio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkLaboratorioMedicamentoIdMedicamentoIdx` (`intIdMedicamento` ASC),
    ADD CONSTRAINT `fkLaboratorioMedicamentoIdMedicamento`
        FOREIGN KEY (`intIdMedicamento`)
        REFERENCES `Medicamento` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Persona`
    ADD INDEX `fkPersonaIdTipoPersonaIdx` (`intIdTipoPersona` ASC),
    ADD CONSTRAINT `fkPersonaIdTipoPersona`
        FOREIGN KEY (`intIdTipoPersona`)
        REFERENCES `TipoPersona` (`intIdTipoPersona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkPersonaIdBarrioIdx` (`intIdBarrio` ASC),
    ADD CONSTRAINT `fkPersonaIdBarrio`
        FOREIGN KEY (`intIdBarrio`)
        REFERENCES `Barrio` (`intIdBarrio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
