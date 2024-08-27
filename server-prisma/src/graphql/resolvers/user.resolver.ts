import { UserRepository } from "../../repository/user.repository";
import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { UserT } from "../types/user/user.objectType";
import { UserInput } from "../types/user/user.inputType";

@Resolver()
export class UserResolver {
  public readonly _repository: UserRepository

  constructor() {
    this._repository = new UserRepository()
  }


  @Query(() => [UserT])
  public async users(): Promise<UserT[] | string> {
    try {
      const users = await this._repository.find()
      console.log(users, "uuuuuuuuu")
      return users

    } catch (error) {
      console.log(error)
      return "error occured"
    }
  }


  @Mutation(() => String)
  public async user(
    @Arg("input") input: UserInput
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


