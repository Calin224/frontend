import React, {useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import WishItem from "@/components/WishItem";
import {addToCart} from "@/store/cartSlice";
import { useSelector } from "react-redux";
import {toast} from "react-toastify";

export default function WishList() {


    const [loading, setLoading] = useState(false);
    const {wishList} = useSelector((state => state.wishList))
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {wishList.length >= 1 && (
                    <>
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Wish List
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">Cart Item</div>
                                {wishList.map((item) => (                        
                                    <WishItem key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </>
                )}


                {wishList < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">Your wish list empty</span>
                        <span className="text-center mt-4">
                    Looks like you have not added anything in wish list.
                    <br/>
                    Go ahead and explore top categories.
                  </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>)
                }
            </Wrapper>
        </div>
    );
}


// dispatch(
//     addToCart({
//         ...product?.data?.[0],
//         selectedSize,
//         oneQuantityPrice: p.price,
//     })
// );
// notify();