import { Prisma } from "@prisma/client";
import { Field, InputType } from "type-graphql";


@InputType()
export class CategoryInput implements Prisma.CategoryCreateInput {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  image: string;

  @Field()
  description: string;

  @Field()
  isActive: string;

  @Field(() => String, { nullable: true })
  productId?: string;
}
