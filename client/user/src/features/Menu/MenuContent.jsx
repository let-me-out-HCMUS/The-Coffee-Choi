import ProductCard from "../ProductCard/ProductCard";

export default function MenuContent({ categories, products }) {
  return (
    <div className=" mx-4 mt-16 lg:mt-0 lg:border-l-2 lg:border-solid lg:border-amber-800 lg:pl-10">
      {categories.map((category) => (
        <div key={category.id}>
          <div className=" mb-4 font-semibold text-2xl">{category.name}</div>

          <div className=" mb-12 grid grid-cols-2 gap-x-8 md:grid-cols-4 md:gap-x-4 lg:grid-cols-4 lg:gap-x-4">
            {products
              .filter((product) => product.category === category.id)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
