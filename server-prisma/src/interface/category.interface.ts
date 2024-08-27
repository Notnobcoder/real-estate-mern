import { Category, Prisma } from "@prisma/client";

export interface IcategoryRepository {
  create(data: Prisma.CategoryCreateInput): Promise<Category>
  find(): Promise<Category[]>
}
