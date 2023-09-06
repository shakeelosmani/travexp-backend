CREATE TABLE `travelxp`.`adventure_types` (
  `adventureTypeId` INT NOT NULL AUTO_INCREMENT,
  `adventureTypeName` VARCHAR(100) NOT NULL,
  `adventureTypeCoverPhoto` VARCHAR(200) NULL,
  PRIMARY KEY (`adventureTypeId`),
  INDEX `adventureTypeName` (`adventureTypeName` ASC) VISIBLE);
