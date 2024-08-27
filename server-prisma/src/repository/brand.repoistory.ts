
import { Brand, Prisma, PrismaClient, User } from "@prisma/client";
import { IbrandRepository } from "../interface/brand.interface";

export class BrandRepository implements IbrandRepository {
  private readonly _prisma: PrismaClient

  constructor() {
    this._prisma = new PrismaClient
  }

  public async create(data: Prisma.BrandCreateInput): Promise<Brand> {
    return await this._prisma.brand.create({
      data: data
    })

  }

  public async find(): Promise<Brand[]> {
    return await this._prisma.brand.findMany()
  }

  public async delete(id: string): Promise<User> {
    return await this._prisma.user.delete({
      where: {
        id
      }
    })
  }



}
