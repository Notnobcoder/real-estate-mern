import { Prisma, PrismaClient, User } from "@prisma/client";
import { IuserRepository } from "../interface/userRepository.interface";

export class UserRepository implements IuserRepository {
  private readonly _prisma: PrismaClient

  constructor() {
    this._prisma = new PrismaClient
  }

  public async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this._prisma.user.create({
      data: data
    })
  }

  public async find(): Promise<User[]> {
    return await this._prisma.user.findMany()
  }

  public async delete(id: string): Promise<User> {
    return await this._prisma.user.delete({
      where: {
        id
      }
    })
  }



}
