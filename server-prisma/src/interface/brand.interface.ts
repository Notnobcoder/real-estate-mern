
import { Brand, Prisma } from "@prisma/client";

export interface IbrandRepository {
  create(data: Prisma.BrandCreateInput): Promise<Brand>
  find(): Promise<Brand[]>
}
