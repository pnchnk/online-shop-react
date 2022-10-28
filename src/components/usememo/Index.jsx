import React from "react";

function Index() {
    useGetAllProductsQuery();

    const mainProducts = Array.from(products);

    const [sort, setSort] = useState("relevance");

    const onSelect = (e) => {
        setSort(e.target.value);
    };

    const relevant = useMemo(() => {
        if (sort === "relevance") {
            return mainProducts?.sort((a, b) => b.rating - a.rating);
        } else if (sort === "low-high") {
            return mainProducts.sort(
                (a, b) =>
                    Math.round(
                        a.price - (a.price * a.discountPercentage) / 100
                    ) -
                    Math.round(b.price - (b.price * b.discountPercentage) / 100)
            );
        } else if (sort === "high-low") {
            return mainProducts.sort(
                (a, b) =>
                    Math.round(
                        b.price - (b.price * b.discountPercentage) / 100
                    ) -
                    Math.round(a.price - (a.price * a.discountPercentage) / 100)
            );
        }
    }, [sort]);
    
    return (
        <>
            <div className="products__sort">
                Sort by :{" "}
                <select value={sort} onChange={onSelect}>
                    <option selected value={"relevance"}>
                        Relevance
                    </option>
                    <option value={"low-high"}>Price: low to high</option>
                    <option value={"high-low"}>Price: high to low</option>
                </select>
            </div>
        </>
    );
}

export default Index;
