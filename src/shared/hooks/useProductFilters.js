// Управляет состоянием фильтров через URL: читет фильтры из URL-параметров, обновляет URL при изменении фильтров, формирует объект filters
import { useSearchParams } from "react-router-dom";

const useProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    minPrice: Number(searchParams.get("minPrice")) || 0,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined,
    salesOnly: searchParams.get("salesOnly") === "true",
    sortBy: searchParams.get("sortBy") ?? "bydefault",
  };

  const updateFilters = (newFilters) => {
    const params = new URLSearchParams(searchParams);

    if (newFilters.minPrice !== undefined) {
      params.set("minPrice", newFilters.minPrice);
    }

    if (newFilters.maxPrice !== undefined) {
      params.set("maxPrice", newFilters.maxPrice);
    }

    if (newFilters.salesOnly !== undefined) {
      params.set("salesOnly", String(newFilters.salesOnly));
    }

    if (newFilters.sortBy) {
      params.set("sortBy", newFilters.sortBy);
    }

    setSearchParams(params);
  };

  return { filters, updateFilters };
};

export default useProductFilters;
