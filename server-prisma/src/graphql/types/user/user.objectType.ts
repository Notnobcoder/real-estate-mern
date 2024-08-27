import { $Enums, User } from "@prisma/client"
import { ObjectType, Field } from "type-graphql"




@ObjectType()
export class UserT implements User {
  @Field()
  id: string

  @Field()
  email: string

  @Field()
  phoneNumber: number

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  password: string

  @Field()
  provider: string

  @Field()
  googleId: string

  @Field()
  facebookId: string

  @Field()
  avatar: string

  @Field()
  role: $Enums.Role

  @Field()
  created: Date

  @Field()
  updated: Date

}
