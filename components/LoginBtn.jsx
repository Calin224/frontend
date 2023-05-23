import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LoginBtn() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <div className={'flex gap-3 items-center'}>
        <button onClick={() => {
          signOut();
          router.push('/');
        }}>Sign out</button>
        <div>|</div>
        <Link href={`/profile/`} className={'font-bold m-0'}>{session.user.name}</Link>
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
