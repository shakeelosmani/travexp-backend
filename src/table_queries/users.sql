CREATE TABLE `travelxp`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `uid` VARCHAR(128) NULL,
  `email` VARCHAR(200) NULL,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `avatar` VARCHAR(200) NULL,
  `phoneNumber` VARCHAR(13) NULL,
  `emailVerified` BINARY NULL DEFAULT 0,
  PRIMARY KEY (`userId`),
  INDEX `uid` (`email` ASC, `uid` ASC) VISIBLE);
