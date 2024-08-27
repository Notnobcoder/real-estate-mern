
import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { BrandRepository } from "../../repository/brand.repoistory";
import { BrandT } from "../types/brand/brand.objectType";
import { BrandInput } from "../types/brand/brand.inputType";

@Resolver()
export class BrandResolver {
  public readonly _repository: BrandRepository

  constructor() {
    this._repository = new BrandRepository()
  }


  @Query(() => [BrandT])
  public async Brands(): Promise<BrandT[] | string> {
    try {
      const users = await this._repository.find()
      console.log(users, "uuuuuuuuu")
      return "user"

    } catch (error) {
      console.log(error)
      return "error occured"
    }
  }


  @Mutation(() => String)
  public async Brand(
    @Arg("input") input: BrandInput
  ): Promise<string> {
    try {
      const user = await this._repository.create(input)
      console.log(user)
      return "User Created"

    } catch (error) {
      console.log(error)
      return "error occured"

    }

  }

}


