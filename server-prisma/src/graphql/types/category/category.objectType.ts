import { Category } from "@prisma/client";
import { ObjectType, Field, ID } from "type-graphql";
import { ProductT } from "../product/product.objectType";


@ObjectType()
export class CategoryT implements Category {
  @Field()
  productId: string;

  @Field(() => ID)
  id: string;

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

  @Field(() => ProductT, { nullable: true })
  Product?: ProductT;

  @Field()
  created: Date;

  @Field()
  updated: Date;
}
