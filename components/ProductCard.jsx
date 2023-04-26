import Link from "next/link"
import Image from "next/image"

export default function ProductCard(){
    return(
        <Link href='/' className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
            <Image
                width={500}
                height={500}
                src={`/p1.png`}
                alt={`hello`}
            />

            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">product name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#x24; 150
                    </p>
                    <p className="text-base font-medium line-through">
                        &#x24; 198
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                        20% off
                    </p>
                </div>
            </div>
        </Link>
    )
}