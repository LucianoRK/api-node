import { Sequelize, DataTypes, Model } from "sequelize";
const sequelize = new Sequelize('mysql:memory');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'User'
});

export default User;
