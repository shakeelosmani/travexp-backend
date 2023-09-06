CREATE TABLE `travelxp`.`experience_adventure_users` (
  `experienceAdventureId` INT NOT NULL AUTO_INCREMENT,
  `uid` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`experienceAdventureId`),
  INDEX `uid` (`uid` ASC) VISIBLE);
