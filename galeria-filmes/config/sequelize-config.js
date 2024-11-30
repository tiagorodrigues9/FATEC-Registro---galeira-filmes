import Sequelize from "sequelize"

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "25183030Atdf!",
  database: 'Filmes',
  timezone: "-03:00",
  logging: false
})

export default connection
