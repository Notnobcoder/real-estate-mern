import React from 'react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';
import { ApiClientP } from '../../ApiClient/post.apiClient';
import { InputComponent } from '../../components/Input';
import { Button } from '@chakra-ui/react';
import { MerchantSchema } from '../../schemas';


const MerchantForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
    resolver: zodResolver(MerchantSchema)
  });

  const [addMerchant, { loading }] = useMutation(ApiClientP.ADD_MERCHANT);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await addMerchant({
        variables: {
          body: data
        }
      });
      toast.success("Merchant Added ")
      reset()
      console.log('Merchant added successfully:', response.data.addMerchant);
    } catch (error) {
      toast.error('Error adding merchant:');
    }
  };


  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        disabled={loading}
        placeholder="Enter Name"
        required={true}
        register={register}
        id="name"
        errors={errors}
        type="text"
      />

      <InputComponent
        disabled={loading}
        placeholder="Enter Email"
        required={true}
        register={register}
        id="email"
        errors={errors}
        type="email"
      />
      <InputComponent
        disabled={loading}
        placeholder="Enter Phone Number"
        required={true}
        register={register}
        id="phoneNumber"
        errors={errors}
        type="text"
      />

      <InputComponent
        disabled={loading}
        placeholder="Enter Brand Name"
        required={true}
        register={register}
        id="brandName"
        errors={errors}
        type="text"
      />
      <InputComponent
        disabled={loading}
        placeholder="Enter Business Description"
        required={true}
        register={register}
        id="business"
        errors={errors}
        type="text"
      />
      <label>
        <input type="checkbox" {...register("isActive")} />
        Is Active
      </label>
      <div className='mt-4'>
        <Button
          isLoading={loading}
          type="submit">Add Merchant</Button>

      </div>
    </form>
  );
};

export default MerchantForm;

