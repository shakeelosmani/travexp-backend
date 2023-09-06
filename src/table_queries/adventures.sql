CREATE TABLE `travelxp`.`adventures` (
  `adventureId` INT NOT NULL AUTO_INCREMENT,
  `adventureName` VARCHAR(100) NOT NULL,
  `adventureCoverPhoto` VARCHAR(200) NULL,
  `adventureAddress` VARCHAR(100) NULL,
  `adventureCity` VARCHAR(100) NULL,
  `adventureState` VARCHAR(2) NULL,
  `adventureZip` VARCHAR(10) NULL,
  `adventureTypeId` INT NOT NULL,
  PRIMARY KEY (`adventureId`));
