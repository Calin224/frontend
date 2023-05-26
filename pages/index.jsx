import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products, productsA, productsD, productsNaA, productsNaD }) {
    const [isProductListEmpty, setIsProductListEmpty] = useState(false);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        if (products?.data?.length === 0) {
            setIsProductListEmpty(true);
        }
    }, [products]);

    const handleChange = (e) => {
        setSortBy(e.target.value);
        console.log(sortBy);
    };

    return (
        <main>
            <HeroBanner />
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Choose Box Water
                    </div>
                    <div className="text-md md:text-xl">
                        Boxed water is more sustainable than single-use plastic
                        bottles, reducing environmental impact. It is also
                        recyclable, easy to transport, and the paper box keeps
                        the water fresher for longer.
                    </div>
                </div>

                {isProductListEmpty ? (
                    <div>
                        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                No products found
                            </div>
                            <div className="text-md md:text-xl">
                                We're sorry, but we couldn't find any products
                                matching your search criteria.
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mb-12">
                        <div className="mb-14 flex flex-wrap items-center md:space-x-3">
                            <div className="mb-4 md:mb-0 space-x-2">
                                <label htmlFor="sort">Sort by Price:</label>
                                <select id="sort" onChange={handleChange} className="bg-black/[0.1] py-3 px-2 rounded-lg">
                                    <option value="">None</option>
                                    <option
                                        value="asc"
                                    // onChange={handleChange}
                                    >
                                        Price (Low to High)
                                    </option>
                                    <option
                                        value="desc"
                                    // onChange={handleChange}
                                    >
                                        Price (High to Low)
                                    </option>
                                </select>
                            </div>

                            <div className="space-x-2">
                                <label htmlFor="s_name">Sort by name:</label>
                                <select id="s_name" onChange={handleChange} className="bg-black/[0.1] py-3 px-2 rounded-lg">
                                    <option value="">None</option>
                                    <option
                                        value="nasc"
                                    // onChange={handleChange}
                                    >
                                        Ascending
                                    </option>
                                    <option
                                        value="ndesc"
                                    // onChange={handleChange}
                                    >
                                        Descending
                                    </option>
                                </select>
                            </div>

                        </div>
                        {sortBy === "" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {products?.data?.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        data={product}
                                    />
                                ))}
                            </div>
                        ) : sortBy === "desc" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {productsD?.data?.map((productF) => (
                                    <ProductCard
                                        key={productF.id}
                                        data={productF}
                                    />
                                ))}
                            </div>
                        ) : sortBy === "nasc" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {productsNaA?.data?.map((productF) => (
                                    <ProductCard
                                        key={productF.id}
                                        data={productF}
                                    />
                                ))}
                            </div>
                        ) : sortBy === "ndesc" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {productsNaD?.data?.map((productF) => (
                                    <ProductCard
                                        key={productF.id}
                                        data={productF}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {productsA?.data?.map((productF) => (
                                    <ProductCard
                                        key={productF.id}
                                        data={productF}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const productsA = await fetchDataFromApi(
        `/api/products?sort=price:asc&populate=*`
    );
    const productsD = await fetchDataFromApi(
        `/api/products?sort=price:desc&populate=*`
    );
    const productsNaA = await fetchDataFromApi(
        "/api/products?sort=name:asc&populate=*"
    );
    const productsNaD = await fetchDataFromApi(
        "/api/products?sort=name:desc&populate=*"
    );
    return {
        props: {
            products,
            productsA,
            productsD,
            productsNaA,
            productsNaD,
        },
    };
}
