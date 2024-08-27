import { MainLayout } from "../../layout/main"

const prices = [
  {
    name: '$1 to $50',
    value: '1-50',
  },
  {
    name: '$51 to $200',
    value: '51-200',
  },
  {
    name: '$201 to $1000',
    value: '201-1000',
  },
];

export const ratings = [
  {
    name: '4stars & up',
    rating: 4,
  },

  {
    name: '3stars & up',
    rating: 3,
  },

  {
    name: '2stars & up',
    rating: 2,
  },

  {
    name: '1stars & up',
    rating: 1,
  },
];

const SearchPage = () => {
  return (
    <MainLayout>
      <div className="container min-h-[50vh] grid gap-4 grid-cols-12">
        <div className="col-span-2 font-bold  space-y-8">
          <h4 className="text-2xl">Brand</h4>
          <h4 className="text-2xl">Price</h4>
          <div className="space-y-1">
            {prices.map((_) => (
              <div>
                <h4 className="text-sm">{_.name}</h4>
              </div>

            ))}
          </div>
          <h4 className="text-2xl">Average Customer Review</h4>
          <div className="space-y-1">
            {ratings.map((_) => (
              <div>
                <h4 className="text-sm">{_.name}</h4>
              </div>

            ))}
          </div>
        </div>

        <div className="col-span-10">
          <h4 className="text-3xl font-bold">Search Products</h4>
        </div>
      </div>
    </MainLayout>
  )
}

export default SearchPage
