import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

class UserController {
  async index(req, res) {
    console.log('teste.');
  }

  async show(req, res) {
    const body = req.body;
    const user = await prisma.user.create({
      data: {
        email: 'elsa@prisma.io',
        name: 'Elsa Prisma',
        password: 'teste',
      },
    })

    return res.json(user);
  }

  store(req, res) {

  }

  update(req, res) {

  }

  delete(req, res) {

  }
}

export default new UserController;