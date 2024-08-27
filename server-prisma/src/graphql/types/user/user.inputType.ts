import { Role, Prisma } from "@prisma/client"
import { Field, InputType } from "type-graphql"


@InputType()
export class UserInput implements Prisma.UserCreateInput {
  @Field()
  email: string;

  @Field()
  phoneNumber: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  provider?: string;

  @Field({ nullable: true })
  googleId?: string;

  @Field({ nullable: true })
  facebookId?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field(() => Role, { nullable: true })
  role?: Role;
}
