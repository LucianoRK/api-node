import User from "../models/User";

import db from "../../db";

class UserController {
    async index(req, res){
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    show(req, res){

    }

    store(req, res){

    }

    update(req, res){

    }

    delete(req, res){

    }
}

export default new UserController;