
import { getSignInUrl, getUser, signOut } from '@workos-inc/authkit-nextjs';
import Link from 'next/link';

export default async function Header(){
  const { user } = await getUser(); 
  const signInUrl= await getSignInUrl();
  const signOutUrl= await getSignInUrl();
 
return(
    <header >
        <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={'/'} className="font-bold text-xl px-2">Job Board</Link>
      
      <nav className="flex gap-2 ">
        {!user && (
          <Link className="rounded-md bg-gray-200 py-2 px-4" href={signInUrl}>
            Login
          </Link>
        )}
        {user && (
          <form action ={async ()=>{
            'use server';
            await signOut();
          }}>
          <button type="submit" className=" rounded-md bg-gray-200 py-2 px-4">
            Logout

            </button>
            </form>
          
        )}

       <Link className=" rounded-md py-2 px-4 bg-blue-600 text-white" href={'/new-listing'}>
       Post a job
       </Link>
       
      </nav>
      </div>
      </header>
);
}