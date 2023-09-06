CREATE TABLE `travelxp`.`experience_adventures` (
  `experienceAdventureId` INT NOT NULL AUTO_INCREMENT,
  `experienceId` INT NULL,
  `adventureId` INT NULL,
  PRIMARY KEY (`experienceAdventureId`),
  INDEX `experienceAdventureId` (`experienceId` ASC, `adventureId` ASC) VISIBLE);
