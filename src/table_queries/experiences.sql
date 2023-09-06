CREATE TABLE `travelxp`.`experiences` (
  `experienceId` INT NOT NULL AUTO_INCREMENT,
  `experienceName` VARCHAR(100) NULL,
  `experienceCoverPhoto` VARCHAR(200) NULL,
  `experienceUpcomingDate` DATETIME NOT NULL,
  `experienceHasExpired` VARCHAR(45) NULL DEFAULT 0,
  PRIMARY KEY (`experienceId`),
INDEX `experienceNameDate` (`experienceName` ASC, `experienceUpcomingDate` ASC) VISIBLE);
