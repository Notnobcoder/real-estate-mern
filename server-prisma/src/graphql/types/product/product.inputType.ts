import { Field, InputType } from "type-graphql";

interface ProductInputT {
  sku: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  taxable: boolean
  isActive: boolean
  imageUrl: string
  imageKey: string
  brand: string
}



@InputType()
export class ProductInput implements ProductInputT {
  @Field()
  sku: string

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  taxable: boolean;

  @Field()
  isActive: boolean;

  @Field()
  imageUrl: string;

  @Field()
  imageKey: string;

  @Field()
  brand: string;

}


