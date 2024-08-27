import { gql } from "@apollo/client";




class FetchDetails {
  public GET_LOCATIONS = gql`

      query GetProduct {
        getProduct {
        id
        name
        imageUrl
        description
        price

    }
}
`;

  public GET_PRODUCT_BY_ID = gql`
    query GetSingleProductById($id: ID!) {
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


  public GET_MERCHANT = gql`
    query GetMerchant {
      getMerchant {
        id
        name
        email
        phoneNumber
        brandName
        business
        status
        isActive
    }

}

`


  public GET_Brand = gql`
    query GetBrands {
      getBrands {
        id
        name
        imageUrl
    }
}



`




}

export { FetchDetails }


export const ApiClient = new FetchDetails()

