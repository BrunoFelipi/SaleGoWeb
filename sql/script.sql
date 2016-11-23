create table usuario(
  id int auto_increment primary key,
  nome varchar(100),
  email varchar(50),
  senha varchar(50),
  token varchar(32),
  tipoPessoa char(1),
  identificacao varchar(20),
  ativo char(1)
);

CREATE TABLE  ponto (
  id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idEmpresa int(8) DEFAULT NULL,
  endereco varchar(200) DEFAULT NULL,
  latitude long,
  longitude long,
  descricao varchar(200) DEFAULT NULL,
  raioAlcance varchar(100) DEFAULT NULL,
  valor varchar(100) DEFAULT NULL,
  tipoDesconto varchar(10) DEFAULT NULL,
  qtdClientes int(8),
  dataVencimento datetime,
  ativo char(1)
);

insert into ponto values (0, 1, 'Rua São Paulo, 825', 'Senior Sistemas', '100', '10', '%', 3, 's');
insert into ponto values (0, 1, 'Rua Nereu Ramos, 25', 'Centro', '100', '200', 'R$', 0, 's');
insert into ponto values (0, 1, 'Rua Virginia Ferreira, 181', 'Casa', '130', '10', '%', 0, 'n');
insert into ponto values (0, 1, 'Rua 7 de Setembro, 1065', 'Shopping Neu', '50', '10', '%', 10, 's');
insert into ponto values (0, 1, 'Rua Timbó, 25', 'CREA', '300', '20', 'R$', 2, 's');

create table pontosPegos(
  id int (8) primary key auto_increment,
  idPonto int(8),
  idCliente int(8),
  dia datetime
);

CREATE TABLE  empresa (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  cnpj varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  email varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  senha varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  ativo char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  logo int(11) DEFAULT NULL,
  KEY `emp_logo_fk` (`logo`)
);

CREATE TABLE  cliente (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  cpf varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  email varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  senha varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
);
