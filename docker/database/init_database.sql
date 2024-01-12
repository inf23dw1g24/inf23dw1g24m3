create schema trabalho;
use trabalho;

CREATE TABLE `trabalho`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NULL,
  `status` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `trabalho`.`calendars` (
  `id` INT NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `trabalho`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `calendar_id` int NOT NULL,  
  `category_id` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `trabalho`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  `calendar_id` INT NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `trabalho`.`events` 
  ADD CONSTRAINT `fk_events_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `trabalho`.`categories` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION;

ALTER TABLE `trabalho`.`events` 
  ADD CONSTRAINT `fk_events_calendar`
    FOREIGN KEY (`calendar_id`)
    REFERENCES `trabalho`.`calendars` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION;

ALTER TABLE `trabalho`.`categories` 
    ADD CONSTRAINT `fk_categories_calendar`
        FOREIGN KEY (`calendar_id`)
        REFERENCES `trabalho`.`calendars` (`id`)
        ON DELETE CASCADE
        ON UPDATE NO ACTION;

ALTER TABLE `trabalho`.`calendars` 
    ADD CONSTRAINT `fk_calendars_user`
        FOREIGN KEY (`user_id`)
        REFERENCES `trabalho`.`users` (`id`)
        ON DELETE CASCADE
        ON UPDATE NO ACTION;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root';

INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('1', 'Filipa Campos', 'filipa.campos@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('2', 'Helena Campos', 'helena.campos@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('3', 'Salvador Coelho', 'salvador.coelho@mail.pt', 'inactive');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('4', 'Melissa Almeida', 'melissa.almeida@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('5', 'Joaquim Matias', 'joaquim.matias@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('6', 'Adriana Morais', 'adriana.morais@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('7', 'Clara Oliveira', 'clara.oliveira', 'inactive');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('8', 'Cláudio Campos', 'claudio.campos@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('9', 'Fernando Barros', 'fernando.barros@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('10', 'Ângela Esteves', 'angela.esteves', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('11', 'Gil Lopes', 'gil.lopes@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('12', 'Rita Sá', 'rita.sa@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('13', 'Bruna Pereira', 'bruna.pereira@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('14', 'Lia Lima', 'lia.lima@mail.pt', 'inactive');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('15', 'Valentim Lopes', 'valentim.lopes@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('16', 'Mara Domingues', 'mara.domingues@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('17', 'Yara Barros', 'yara.barros@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('18', 'Irina Vieira', 'irina.vieira@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('19', 'Ivan Alves', 'ivan.alves@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('20', 'Alice Cruz', 'alice.cruz@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('21', 'Rafaela Teixeira', 'rafaela.teixeira@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('22', 'Mara Marques', 'mara.marques@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('23', 'Lia Moura', 'lia.moura@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('24', 'Vera Carvalho', 'vera.carvalho@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('25', 'Sofia Assunção', 'sofia.assuncao@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('26', 'Filipe Magalhães', 'filipe.magalhaes@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('27', 'Sebastião Almeida', 'sebastiao.almeida@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('28', 'Miguel Valente', 'miguel.valente@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('29', 'Cátia Andrade', 'catia.andrade@mail.pt', 'active');
INSERT INTO `trabalho`.`users` (`id`, `name`, `email`, `status`) VALUES ('30', 'Gustavo Faria', 'gustavo.faria@mail.pt', 'active');



INSERT INTO calendars (id, description, user_id)
VALUES 
	(1, "Personal Calendar Filipa Campos",1 ),
	(31, "Parties Calendar Filipa Campos",1 ),
	(32, "Birthdays Calendar Filipa Campos",1 ),
	(2, "Personal Calendar Helena Campos",2),
	(33, "Workout Calendar Helena Campos",2),
	(3, "Personal Calendar Salvador Coelho",3),
	(4, "Personal Calendar Melissa Almeida",4),
	(5, "Personal Calendar Joaquim Matias",5),
	(6, "Personal Calendar Adriana Morais",6),
	(7, "Personal Calendar Clara Oliveira",7),
	(8, "Personal Calendar Cláudio Campos",8),
	(9, "Personal Calendar Fernando Barros",9),
	(10, "Personal Calendar Ângela Esteves",10),
	(11, "Personal Calendar Gil Lopes",11),
	(12, "Personal Calendar Rita Sá",12),
	(13, "Personal Calendar Bruna Pereira",13),
	(14, "Personal Calendar Lia Lima",14),
	(15, "Personal Calendar Valentim Lopes",15),
	(16, "Personal Calendar Mara Domingues",16),
	(17, "Personal Calendar Yara Barros",17),
	(18, "Personal Calendar Irina Vieira",18),
	(19, "Personal Calendar Ivan Alves",19),
	(20, "Personal Calendar Alice Cruz",20),
	(21, "Personal Calendar Rafaela Teixeira",21),
	(22, "Personal Calendar Mara Marques",22),
	(23, "Personal Calendar Lia Moura",23),
	(24, "Personal Calendar Vera Carvalho",24),
	(25, "Personal Calendar Sofia Assunção",25),
	(26, "Personal Calendar Filipe Magalhães",26),
	(27, "Personal Calendar Sebastião Almeida",27),
	(28, "Personal Calendar Miguel Valente",28),
	(29, "Personal Calendar Cátia Andrade",29),
	(30, "Personal Calendar Gustavo Faria",30);
    

Insert into categories (id, description, calendar_id)
VALUES
	(1,"Personal", 1),
  (31,"Doctor's appointment", 1),
  (32,"Kids", 1),
  (2,"Personal", 2),
  (33,"Running", 2),
  (34,"Padel Game", 2),
  (3,"Personal", 3),
  (4,"Personal", 4),
  (5,"Personal", 5),
  (6,"Personal", 6),
  (7,"Personal", 7),
  (8,"Personal", 8),
  (9,"Personal", 9),
	(10,"Personal", 10),
	(11,"Personal", 11),
	(12,"Personal", 12),        
	(13,"Personal", 13),
  (14,"Personal", 14),
	(15,"Personal", 15),
	(16,"Personal", 16),
	(17,"Personal", 17),
	(18,"Personal", 18),
	(19,"Personal", 19),
	(20,"Personal", 20),
	(21,"Personal", 21),
	(22,"Personal", 22),
	(23,"Personal", 23),
	(24,"Personal", 24),
	(25,"Personal", 25),
	(26,"Personal", 26),
	(27,"Personal", 27),
	(28,"Personal", 28),
	(29,"Personal", 29),
	(30,"Personal", 30);

INSERT INTO events (id, description, start_date, end_date, calendar_id, category_id)
VALUES 
	(1, "Laundry", "2023-12-17 17:00", "2023-12-17 18:00", 1, 1),
  (2, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 2, 2),
  (3, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 3, 3),
  (4, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 4, 4),
  (5, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 5, 5),
  (6, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 6, 6),
  (7, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 7, 7),
  (8, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00",8, 8),
  (9, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 9, 9),
  (10, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 10, 10),
  (11, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 11, 11),
  (12, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 12, 12),
  (13, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 13, 13),
  (14, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 14, 14),
  (15, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 15, 15),
  (16, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 16, 16),
  (17, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 17, 17),
  (18, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 18, 18),
  (19, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 19, 19),
  (20, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 20, 20),
  (21, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 21, 21),
  (22, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 22, 22),
  (23, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 23, 23),
  (24, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 24, 24),
  (25, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 25, 25),
  (26, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 26, 26),
  (27, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 27, 27),
  (28, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 28, 28),
  (29, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 29, 29),
  (30, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 30, 30),
  (31, "Dentist", "2023-12-18 19:00", "2023-12-18 20:00", 1, 31),
  (32, "Meeting School director", "2023-12-18 10:00", "2023-12-18 11:00", 1, 32);