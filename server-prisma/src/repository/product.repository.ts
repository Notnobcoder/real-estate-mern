import { Prisma, PrismaClient, Product } from "@prisma/client";
import { IProductRepository } from "../interface/productRepository.interface";

export class ProductRepository implements IProductRepository {
  private readonly _prisma: PrismaClient

  constructor() {
    this._prisma = new PrismaClient()
  }

  public async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return await this._prisma.product.create({
      data: data
    })
  }

  public async find(): Promise<Product[]> {
    return await this._prisma.product.findMany()
  }
}
