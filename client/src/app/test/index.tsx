import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LoadingLayout } from "../../layouts/LoadingLayout";
import { Link } from "react-router-dom";

export interface TestProps { }

export type StoreCollectionD = {
  continents: Continent[];
  countries: Continent[];
  languages: Continent[];
};

export type Continent = {
  code: string;
};

export const Test = () => {
  const query = `
  query ExampleQuery {
    countries {
      code
},
  }
`;

  const url = `https://countries.trevorblades.com/graphql?query=${encodeURIComponent(
    query,
  )}`;

  const { data, isPending, error } = useQuery<StoreCollectionD>({
    queryKey: ["graph"],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data.data;
    },
    refetchOnWindowFocus: false,
  });

  if (error) {
    <div>
      <h4>{error.message}</h4>
    </div>;
  }
  return (
    <>
      <div>
        <h4 className="text-3xl capitalize">custom data with graph ql</h4>

        <Link to="/">home</Link>
        <LoadingLayout loading={isPending}>
          {data?.countries.map((_i) => <h3>{_i.code}</h3>)}
        </LoadingLayout>
      </div>
    </>
  );
};
