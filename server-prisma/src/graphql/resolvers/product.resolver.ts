import { Resolver, Mutation, Query, Arg } from "type-graphql";
import { PrismaClient, Product } from "@prisma/client"
import { ProductT } from "../types/product/product.objectType";
import { ProductInput } from "../types/product/product.inputType";


@Resolver()
export class ProductResolver {
  private readonly _prisma: PrismaClient

  constructor() {
    this._prisma = new PrismaClient

  }

  // TODO: Find All Products
  @Query(() => [ProductT])
  public async getProducts(): Promise<Product[] | string> {
    try {
      const result = await this._prisma.product.findMany();
      return result
    } catch (error) {
      console.error(error); // Log the error for debugging
      return "error fetching Data" // Return an empty array in case of error
    }
  }

  // TODO: Find product by id
  @Query(() => ProductT)
  public async getProductById(
    @Arg("id") id: string
  ): Promise<ProductT | string> {
    try {
      const product = await this._prisma.product.findUnique({
        where: { id },
      });

      if (!product) {
        return "No Product Found"
      }

      // FIX: solve this error
      //  @ts-ignore
      return product;
    } catch (error) {
      console.error(error);
      return "Error Occured "; // Return null if the product is not found or an error occurs
    }
  }



  // TODO: Find Product
  @Mutation(() => String)
  public async addProduct(
    @Arg("product") product: ProductInput,
  ): Promise<string> { // Use lowercase 'string'
    try {
      await this._prisma.product.create({
        data: product
      })
      return "product creted Succesfully "
    } catch (error) {
      console.log(error)
      return "Error";
    }
  }

}
