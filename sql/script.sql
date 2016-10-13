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