import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useCart } from '../../context';
import { MainLayout } from '../../layout/main';

// Define your GraphQL query
const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: String!) {
    getSingleProductById(id: $id) {
      id
      sku
      name
      slug
      imageUrl
      imageKey
      description
      quantity
      price
      taxable
      isActive
    }
  }
`;

interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageKey: string;
  description: string;
  quantity: number;
  price: number;
  taxable: boolean;
  isActive: boolean;
}

interface GetProductByIdData {
  getSingleProductById: Product;
}

interface GetProductByIdVars {
  id: string;
}

const ProductDetail = () => {
  const { id } = useParams<string>();
  const { setCart } = useCart();
  const navigate = useNavigate();

  const handleCartItems = (product: Product) => {


    setCart((prevCart) => {
      return [...prevCart, { ...product }];
    })

    navigate("/cart")

  }


  if (!id) return <p>ID parameter is missing</p>;
  const { data, loading, error } = useQuery<GetProductByIdData, GetProductByIdVars>(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data?.getSingleProductById;

  if (!product) return <p>Product not found</p>;



  return (
    <MainLayout>
      <div className="p-4 container">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        </Link>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex-1'>
            {product.imageUrl && (
              <img src={product.imageUrl} alt={product.name} className="mb-4 w-full max-w-lg" />
            )}
          </div>
          <div className='flex-1'>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-900 mb-2">SKU: {product.sku}</p>
            <p className="text-gray-900 mb-2">Price: ${product.price.toFixed(2)}</p>
            <p className="text-gray-900 mb-2">Quantity: {product.quantity}</p>
            <button onClick={() => handleCartItems(product)} className='text-white bg-slate-800 p-2 rounded-md'>Add To Cart</button>
          </div>
        </div>
      </div >

    </MainLayout>
  );
};

export default ProductDetail;
