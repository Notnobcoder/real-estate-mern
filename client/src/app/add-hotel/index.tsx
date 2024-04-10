import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HomeLayout } from "../../layouts/HomeLayout";
import { hotelSchema } from "./validation";

// star rating
// type ---- Budget boutiqu , luxury , resort , business , family , romance
// facilities --  free wifi , parking , airports , family roos, no smokking rooms
// outdoor , pool , spa, fitness cenetr
// guest -- adult - number , children - number
// image

export interface AddHotelProps {}

export const AddHotel = () => {
  interface FormDataD {
    name: string;
    city: string;
    country: string;
    description: string;
    price: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataD>({
    resolver: zodResolver(hotelSchema),
  });

  const handleAddHotelSubmit = (data: FormDataD) => {
    console.log(data);
  };
  return (
    <>
      <HomeLayout>
        <h4 className="text-3xl">Add Hotel</h4>
        <form
          className="space-y-4 flex flex-col items-center gap-4"
          onSubmit={handleSubmit(handleAddHotelSubmit)}
        >
          <input placeholder="name" {...register("name")} />
          {errors.name ? (
            <div>
              <h4>{errors.name.message}</h4>
            </div>
          ) : null}
          <input placeholder="city" {...register("city")} />
          {errors.city ? (
            <div>
              <h4>{errors.city.message}</h4>
            </div>
          ) : null}
          <input placeholder="country" {...register("country")} />
          {errors.country ? (
            <div>
              <h4>{errors.country.message}</h4>
            </div>
          ) : null}
          <input placeholder="description" {...register("description")} />
          {errors.description ? (
            <div>
              <h4>{errors.description.message}</h4>
            </div>
          ) : null}
          <input
            type="number"
            placeholder="price per night"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price ? (
            <div>
              <h4>{errors.price.message}</h4>
            </div>
          ) : null}

          <input placeholder={"star-rating"} {...register("")} />
          <button type="submit">submit</button>
        </form>
      </HomeLayout>
    </>
  );
};
