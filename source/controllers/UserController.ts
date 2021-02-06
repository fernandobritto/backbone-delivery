import { Request, Response } from 'express'
import Knex from 'knex'
import Knex from '../database'

class UserController {
  //  INDEX
  async index (req: Request, res: Response) {
    try {
      const users = await Knex.select('id', 'name', 'email', 'team').from('users')
      return res.status(200).json(users)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  // SHOW
  async show (req: Request, res: Response) {
    try {
      const user = await Knex.select('id', 'name', 'email', 'team').from('users').where({ id: req.params.id })
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message)
      })
    }
  }

  //  STORE
  async store (req: Request, res: Response) {
    try {
      const newUser = await Knex('users').insert(req.body)
      return res.json(newUser)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  //  UPDATE
  async update (req: Request, res: Response) {
    try {
      // const user: Knex = await Knex('users').where({ id: req.params.id })
      await Knex('users').where({ id: req.params.id }).update(req.body)
      return res.status(200).json({ msg: 'OK' })
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message)
      })
    }
  }

  //  DELETE
  async delete (req: Request, res: Response) {
    try {
      Knex('users').where({ id: req.params.id }).delete()
      return res.status(200).json({ msg: 'User successfully deleted' })
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message)
      })
    }
  }
}

export default new UserController()
