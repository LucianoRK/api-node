import { Sequelize } from "sequelize";

const db = new Sequelize('homedb', 'node', 'node', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;