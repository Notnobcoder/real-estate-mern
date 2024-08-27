import { PrismaClient, Prisma, Category } from "@prisma/client";
import { IcategoryRepository } from "../interface/category.interface";

export class CategoryRepository implements IcategoryRepository {
  private readonly _prisma: PrismaClient

  constructor() {
    this._prisma = new PrismaClient()
  }
  public async find(): Promise<Category[]> {
    return await this._prisma.category.findMany()
  }


  public async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    return await this._prisma.category.create({
      data: data
    })
  }


}
