

export interface MerchantFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  brandName: string;
  business: string;
  isActive: boolean;
}

export interface BrandFormInputs {
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  isActive: string
}
