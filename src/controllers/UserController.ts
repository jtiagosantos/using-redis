import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { cache } from '../services/cache';

class Controller {
  public async getAllUsers(
    request: Request, 
    response: Response, 
    next: NextFunction,
  ) {
    try {
      const usersInMemoryCache = await cache.get('users');

      if (!usersInMemoryCache) {
        const users = await UserRepository.index();

        await cache.set('users', JSON.stringify(users));

        response.status(200).json(users);

        return;
      }

      const users = JSON.parse(usersInMemoryCache);
      
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
      await cache.set('users', '');

      const { body } = request;

      const newUser = await UserRepository.create(body);

      response.status(200).json(newUser);
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  }
}

export const UserController = new Controller();
