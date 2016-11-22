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
  descricao varchar(200) DEFAULT NULL,
  raioAlcance varchar(100) DEFAULT NULL,
  valor varchar(100) DEFAULT NULL,
  tipoDesconto varchar(10) DEFAULT NULL,
  ativo char(1)
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
