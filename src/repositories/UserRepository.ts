import { UserModel } from '../models/User';
import { User } from '../types/User';

class Repository {
  public async index(): Promise<Array<User>> {
    const users = await UserModel.find() as Array<User>;

    return users;
  }

  public async create(user: User): Promise<User> {
    const newUser = await UserModel.create(user) as User;

    return newUser;
  }
}

export const UserRepository = new Repository();
