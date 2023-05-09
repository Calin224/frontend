import { useSession, signIn } from "next-auth/react"
import Link from "next/link"

export default function Profile(){
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    return (
        <div>
            {session?.user?.name ?? (
                <div className="flex flex-col my-10 justify-center items-center space-y-5">
                    <h1 className="">You are not signed in</h1>
                    <button onClick={() => signIn() } className="underline font-bold">Sign In</button>
                </div>
            )}
        </div>
    )
}
