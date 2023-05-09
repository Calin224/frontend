import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { addToWish, removeFromWish } from "@/store/wishListSlice";
import { useDispatch } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function WishItem({ data }) {
    const p = data.attributes;
    const dispatch = useDispatch();

    const notify = () => {
        toast.success("Item deleted!", {
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
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            <ToastContainer />
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <Image
                    src={p?.thumbnail?.data?.attributes?.url}
                    alt={p?.name}
                    width={120}
                    height={120}
                />
            </div>

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-col justify-between">
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {p?.name}
                    </div>

                    {p?.subtitle && (
                        <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                            {p.subtitle}
                        </div>
                    )}

                    {p?.price && (
                        <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                            &#x24; : {p.price}
                        </div>
                    )}
                </div>
                {p?.subtitle && (
                    <div className="text-md font-medium text-black/[0.5] hidden md:block">
                        {p.subtitle}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between mt-4 space-x-10">
                <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md ">
                    <RiDeleteBin6Line
                        onClick={() => {
                            dispatch(removeFromWish({ id: data.id }));
                            notify();
                        }}
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>

            </div>
        </div>
    );
}