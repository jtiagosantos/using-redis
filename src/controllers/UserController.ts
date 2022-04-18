import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/UserRepository';

class Controller {
  public async getAllUsers(
    request: Request, 
    response: Response, 
    next: NextFunction,
  ) {
    try {
      const users = await UserRepository.index();

      response.status(200).json(users);
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  }

  public async createNewUser(
    request: Request, 
    response: Response, 
    next: NextFunction,
  ) {
    try {
      const { body } = request;

      const newUser = await UserRepository.create(body);

      response.status(200).json(newUser);
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  }
}

export const UserController = new Controller();
