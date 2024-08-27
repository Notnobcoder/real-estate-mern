import { InputType, Field } from "type-graphql";

@InputType()
export class BrandInput {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  image?: string;

  @Field()
  description: string;

  @Field()
  isActive?: boolean;

}
