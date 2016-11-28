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
  ativo char(1),
  vencido char(1)
);

insert into ponto values (0, 1, 'Rua São Paulo, 825', '-26.9086729', '-49.0744575', 'Senior Sistemas', '100', '10', '%', 3, '2016-11-23 13:18:03', 's','n');
insert into ponto values (0, 0, 'Rua Nereu Ramos, blumenau', '-26.9264624', '-49.0631095', 'Nereu Ramos', '5', '3', 'R$', 0, '2016-11-30 00:00:00', 's','n');
insert into ponto values (0, 0, 'Rua Virginia Ferreira, 181, Blumenau', '-26.8376666', '-49.1058147', 'Casa', '1', '2', 'R$', 0, '2016-12-26 00:00:00', 's','n');
insert into ponto values (0, 0, 'Shopping neumatkt, blumenau', '-26.9211402', '-49.0697425', 'Shopping', '5', '10', '%', 0, '2016-11-30 00:00:00', 's','n');
insert into ponto values (0, 0, 'Rua general osorio, 1525, blumenau', '-26.9140354', '-49.1104547', 'teste', '20', '1600', 'R$', 0, '2016-11-26 00:00:00', 's','n');

create table pontosPegos(
  id int (8) primary key auto_increment,
  idPonto int(8),
  idEmpresa int(8),
  idCliente int(8),
  dia datetime,
  ativo char(1)
);

CREATE TABLE  empresa (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  cnpj varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  email varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  token varchar(32),
  senha varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  ativo char(1) COLLATE utf8_unicode_ci DEFAULT NULL,  
  logo int(11) DEFAULT NULL,
  KEY `emp_logo_fk` (`logo`)
);

insert into empresa values (1,'teste','123456789','teste@teste.com.br','10b9231267e5844f485572e2c3ae14b1','698dc19d489c4e4db73e28a713eab07b','s',0);


CREATE TABLE  cliente (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  cpf varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  email varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  senha varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
);
