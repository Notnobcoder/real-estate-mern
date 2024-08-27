import { ObjectType, Field, ID } from "type-graphql"

export interface Product {
  id: string;  // Corresponds to the @id field with @db.ObjectId in Prisma
  sku: string; // SKU, unique identifier
  name: string; // Name of the product
  description: string; // Description of the product
  quantity: number; // Quantity of the product price: number; // Price of the product
  taxable: boolean; // Indicates if the product is taxable
  isActive: boolean; // Indicates if the product is active
  imageUrl?: string; // Optional image URL with a default fallback value
  imageKey?: string; // Optional image key with a default value
  brand: string; // Brand associated with the product
  created: Date; // Date when the product was created
  updated: Date; // Date when the product was last updated
}

@ObjectType()
export class ProductT implements Product {
  @Field(() => ID)
  id: string;

  @Field()
  sku: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  taxable: boolean;

  @Field()
  isActive: boolean;

  @Field()
  imageUrl: string

  @Field()
  imageKey: string

  @Field()
  brand: string;

  @Field()
  created: Date;

  @Field()
  updated: Date;
}

