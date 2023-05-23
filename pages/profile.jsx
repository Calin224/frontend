import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    return (
        <div className="h-[70vh] flex justify-center items-center">
            {session?.user ? (
                <div className="flex flex-col justify-center items-center drop-shadow-lg shadow-2xl space-y-5 p-28">
                    <div className="font-bold text-lg">
                        {session?.user?.name}
                    </div>
                    <div className="mb-10">
                        {session?.user?.email}
                    </div>
                    <img src={session?.user?.image} alt="" className="max-w-[90px] max-h-[90px] rounded-full border border-1"/>
                </div>
            ) : (
                <div className="flex flex-col my-10 justify-center items-center space-y-5 shadow-2xl drop-shadow-lg p-28">
                    <h1 className="">You are not signed in</h1>
                    <button
                        onClick={() => signIn()}
                        className="underline font-bold"
                    >
                        Sign In
                    </button>
                </div>
            )}
        </div>
    );
}
