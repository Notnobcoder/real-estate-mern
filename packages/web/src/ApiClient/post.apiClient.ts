
import { gql } from "@apollo/client";


class PostDetails {
  public ADD_MERCHANT = gql`

    mutation AddMerchant($body: MerchantInputT!) {
     addMerchant(body: $body)
  }
`;

  public ADD_BRAND = gql`
    mutation AddBrand($body: BrandInputT!) {
    addBrand(body: $body)
}

`
  public RegisterUser = gql`
    mutation RegisterUser($body: AuthInputT!) {
    registerUser(body: $body)
}

`

  public LoginUser = gql`

mutation LoginUser($body:AuthLoginT!) {
    loginUser(body: $body)
}

`


}

export { PostDetails }


export const ApiClientP = new PostDetails()

