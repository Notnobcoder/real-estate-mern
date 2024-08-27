import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CategoryInput } from "../types/category/category.inputType";
import { CategoryRepository } from "../../repository/category.repository";
import { CategoryT } from "../types/category/category.objectType";

@Resolver()
export class CategoryResolver {

  public readonly _repository: CategoryRepository

  constructor() {
    this._repository = new CategoryRepository()
  }


  @Query(() => [CategoryT])
  public async categories(): Promise<CategoryT | any> {
    try {
      const result = await this._repository.find();
      return result

    } catch (error) {
      console.log(error)
      return "Error"

    }

  }

  @Mutation(() => String)
  public async category(
    @Arg("data") data: CategoryInput
  ): Promise<String> {
    try {
      console.time("startTimer")
      const category = await this._repository.create(data)
      console.timeEnd("startTimer")
      console.log(category)
      return "Category added successfully"

    } catch (error) {
      console.log(error)
      return "Error"

    }
  }

}
