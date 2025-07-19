import { useSearchParams } from "react-router";

export function usePagination() {
    const [searchParams, setSearchParams] = useSearchParams();
    const curPage = Number(searchParams.get("page")) || 1;

    return {};
}

export default usePagination;
