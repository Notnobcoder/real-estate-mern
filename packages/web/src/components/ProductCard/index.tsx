import { Card, Text, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id?: string;
  sku?: string;
  name?: string;
  description?: string;
  quantity?: number;
  price?: number;
  taxable?: boolean;
  isActive?: boolean;
  imageUrl?: string;
  imageKey?: string;
  brand?: string;
  created?: Date;
  updated?: Date;
  __typename?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { imageUrl, description, price, id, name } = product;
  const navigate = useNavigate();

  const handleProductGet = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          className="h-[300px] object-cover w-full"
          src={imageUrl}
          alt={`${name}`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <div className="flex items-center justify-between">
            <Heading size="md">{name}</Heading>
            <Text color="blue.600" fontSize="2xl">
              {price}
            </Text>
          </div>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          {id && (

            <Button onClick={() => handleProductGet(id)} variant="solid" colorScheme="blue">
              Show More
            </Button>
          )}
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
