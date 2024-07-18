
import { getSignInUrl, getUser } from '@workos-inc/authkit-nextjs';
import Link from 'next/link';

export default async function Header(){
  const { user } = await getUser(); 
  const signInUrl= await getSignInUrl()
return(
    <header >
    
  
        <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={'/'} className="font-bold text-xl px-2">Job Board</Link>
      
      <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-md">
        {!user && (
          <Link className="bg-gray-200" href={signInUrl}>Login</Link>
        )}

       <Link className="bg-blue-600 text-white" href={'/new-listing'}>Post a job</Link>
       
      </nav>
      </div>
      </header>
);
}