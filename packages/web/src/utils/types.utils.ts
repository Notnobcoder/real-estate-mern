
// interface User {
//   username: string;
//   email: string;
//   avatar: string;
//   password: string
// }
//
// export interface GetUsersResponse {
//   getUsers: User[];
// }
export type GetUsersResponse = {
  getProduct?: GetProduct[];
}

export type GetProduct = {
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
}


