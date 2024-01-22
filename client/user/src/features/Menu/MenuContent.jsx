import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function MenuContent({ categories, products }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(true);

  const submitSearch = (e) => {
    e.preventDefault();
    setIsSearching(false);
    setSearchResults(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  return (
    <div className=" mx-4 mt-16 lg:w-full lg:mt-0 lg:border-l-2 lg:border-solid lg:border-amber-800 lg:pl-16">
      <form className="relative mb-8" onSubmit={submitSearch}>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
          placeholder="Tên sản phẩm"
          value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value); setIsSearching(true); }}
          required
        />

        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-1 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {categories.map((category) => (
        <div key={category.id}>
          <div className=" mb-4 font-semibold text-2xl">{category.name}</div>

          <div className=" mb-12 grid grid-cols-2 gap-x-8 md:grid-cols-4 md:gap-x-4 lg:grid-cols-4 lg:gap-x-4">
            {isSearching
              ? products
                  .filter((product) => product.category === category.id)
                  // .filter((product) =>
                  //   product.name.toLowerCase().includes(searchValue.toLowerCase())
                  // )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : searchResults
                  .filter((product) => product.category === category.id)
                  // .filter((product) =>
                  //   product.name.toLowerCase().includes(searchValue.toLowerCase())
                  // )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
          </div>
        </div>
      ))}
    </div>
  );
}
