import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop({ required: true })
  public username?: string;

  @prop({ required: true })
  public email?: string;

  @prop({ required: true })
  public password?: string;
}

export const UserModel = getModelForClass(User);
