import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { useMutation } from "@apollo/client"
import { BrandSchema } from "../../schemas"
import { ApiClientP } from "../../ApiClient/post.apiClient"
import { InputComponent } from "../../components/Input"
import { Button } from "@chakra-ui/react"

const BrandForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
    resolver: zodResolver(BrandSchema)
  })

  const [brand, { loading }] = useMutation(ApiClientP.ADD_BRAND)

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    try {

      const parsedData = BrandSchema.parse(data)
      brand({
        variables: {
          body: data
        }
      })
      console.log(parsedData)
      toast.success("Brand Added successfuly")
      reset()


    } catch (error) {
      toast.error("Error Occured")

    }



  }

  return (
    <div>
      <form
        className="space-y-4 mt-4"
        onSubmit={handleSubmit(onSubmit)}>

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
          placeholder="Enter Slug"
          required={true}
          register={register}
          id="slug"
          errors={errors}
          type="text"
        />

        <InputComponent
          disabled={loading}
          placeholder="Enter ImageUrl"
          required={true}
          register={register}
          id="imageUrl"
          errors={errors}
          type="text"
        />

        <InputComponent
          disabled={loading}
          placeholder="Enter Description"
          required={true}
          register={register}
          id="description"
          errors={errors}
          type="text"
        />
        <input
          type="checkbox"
          placeholder="Enter IsActive"
          {...register("isActive")}
        />
        <Button
          isLoading={loading}
          type="submit"
        >submit</Button>
      </form>
    </div>
  )
}

export default BrandForm
