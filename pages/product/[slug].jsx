import {IoMdHeartEmpty} from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import {fetchDataFromApi} from "@/utils/api";
import {getDiscountedPricePercentage} from "@/utils/helper";
import {useState} from "react";
import ReactMarkdown from "react-markdown";
import {useSelector, useDispatch} from "react-redux";
import {addToCart} from "@/store/cartSlice";
import {addToWish} from "@/store/wishListSlice";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({product, products}) {
    const [selectedSize, setSelectedSize] = useState([]);
    const [showError, setShowError] = useState(false);
    const [selectedColor, setSelectedColor] = useState([]);
    const p = product?.data?.[0]?.attributes;

    const dispatch = useDispatch();

    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const wish = () => {
        toast.success("Success. Check your wish list!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="w-full md:py-20">
            <ToastContainer/>
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.image.data}/>
                    </div>

                    <div className="flex-[1] py-3">
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {p.name}
                        </div>

                        <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                PRICE : &#x24;{p.price}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#x24;{p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(p.original_price, p.price)}%
                                        off
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>

                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        <div className="mb-10">
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">Select size</div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                                {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        }${selectedSize === item.size ? " border-black" : ""}`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            {p.color !== null && (
                                <div className="mt-5">
                                    <div className="flex justify-between mb-2">
                                        <div className="text-md font-semibold">Select color</div>
                                    </div>

                                    {p.color != null && (
                                        <div className="flex gap-3">
                                            {p.color.data.map((item, i) => (
                                                <div key={i}>
                                                    {item.color === "red" && (
                                                        <div
                                                            className={`w-6 h-6 rounded-full bg-red-500 hover:border-2 hover:border-red-800 transition-all ${
                                                                item.enabled
                                                                    ? "hover:border-black cursor-pointer"
                                                                    : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                                            }${
                                                                selectedColor === item.color
                                                                    ? " border-2 border-black"
                                                                    : ""
                                                            }`}
                                                            onClick={() => {
                                                                setSelectedColor(item.color);
                                                                setShowError(false);
                                                            }}
                                                        ></div>
                                                    )}
                                                    {item.color === "blue" && (
                                                        <div
                                                            className={`w-6 h-6 rounded-full bg-blue-500 hover:border-2 hover:border-blue-800 transition-all ${
                                                                item.enabled
                                                                    ? "hover:border-black cursor-pointer"
                                                                    : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                                            }${
                                                                selectedColor === item.color
                                                                    ? " border-2 border-black"
                                                                    : ""
                                                            }`}
                                                            onClick={() => {
                                                                setSelectedColor(item.color);
                                                                setShowError(false);
                                                            }}
                                                        ></div>
                                                    )}
                                                    {item.color === "green" && (
                                                        <div
                                                            className={`w-6 h-6 rounded-full bg-green-500 hover:border-2 hover:border-green-800 transition-all ${
                                                                item.enabled
                                                                    ? "hover:border-black cursor-pointer"
                                                                    : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                                            }${
                                                                selectedColor === item.color
                                                                    ? " border-2 border-black"
                                                                    : ""
                                                            }`}
                                                            onClick={() => {
                                                                setSelectedColor(item.color);
                                                                setShowError(false);
                                                            }}
                                                        ></div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )}
                        </div>

                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document.getElementById("sizesGrid").scrollIntoView({
                                        block: "center",
                                        behavior: "smooth",
                                    });
                                } else {
                                    dispatch(
                                        addToCart({
                                            ...product?.data?.[0],
                                            selectedSize,
                                            oneQuantityPrice: p.price,
                                        })
                                    );
                                    notify();
                                }
                            }}
                        >
                            Add to Cart
                        </button>

                        <button
                            className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                            onClick={() => {
                                dispatch(
                                    addToWish({
                                        ...product?.data?.[0],
                                    })
                                );
                                wish();
                            }}
                        >
                            Add to Wishlist
                            <IoMdHeartEmpty size={20}/>
                        </button>

                        <div>
                            <div className={"text-lg font-bold mb-5"}>Product Details</div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts products={products}/>
            </Wrapper>
        </div>
    );
}

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params: {slug}}) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}
