import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginBtn() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className={'flex gap-3 items-center'}>
                <button onClick={() => signOut()}>Sign out</button>
                <div>|</div>
                <h1 className={'font-bold m-0'}>{session.user.name}</h1>
                <img src={session.user.image} className={'max-w-[30px] rounded-full '} alt=""/>
            </div>
        )
    }
    return (
        <div className={'flex gap-3'}>
            Not signed in <br />
            <div>|</div>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}