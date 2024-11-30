import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Filmes = connection.define("filmes", {
  file: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  anoLancamento: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  genero:{
    type: Sequelize.STRING,
    allowNull: false
  },

  classificacaoEtaria: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  duracao: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nota: {
    type: Sequelize.FLOAT, // Alterado para FLOAT para permitir decimais
    allowNull: false,
  },
  sinopse: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Sincronização com o banco de dados (altere para evitar perda de dados)
Filmes.sync({ alter: true }); // Usa "alter" para ajustar a tabela sem apagar dados existentes

export default Filmes;
