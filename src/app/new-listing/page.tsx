'use server'
import { createCompany } from "../actions/workosActions";
import { getUser } from "@workos-inc/authkit-nextjs";
import {WorkOS} from "@workos-inc/node"

export default async function NewListingPage() {
   
   const workos = new WorkOS(process.env.WORKOS_API_KEY);
   const { user } = await getUser({ ensureSignedIn: true });
   async function handleNewCompanyFormSubmit(data:FormData){
    'use server';
    if(user){
        await createCompany(data.get('newCompanyName')as string,user.id);
    }

   }

    if (!user){
        return(
            <div className="container">
                <div>You need to be logged in to post a job</div>
            </div>
        );
    }
    
    const organizationMemberships = await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
     })
    
     return (
        <div className="container">
    
                <div>
                    <h2 className="text-lg mt-6">Your companies</h2>
                    <p className="text-gray-500 text-sm mb-2">Select a company to create a job add for</p>
                    <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
                        No companies found assigned to your user
                    </div>

                    <h2 className="text-lg mt-6">Create a new company</h2>
                    <p className="text-gray-500 text-sm mb-2">To create a job listing you first need to register a company</p>
                    <form 
                      action={handleNewCompanyFormSubmit}
                      className="flex gap-2">
                        <input
                          name="newCompanyName"
                            className="p-2 border border-gray-400 rounded-md"
                            type="text" placeholder="company name" />
                        <button type="submit" className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
                            Create a company
                        </button>
                    </form>
                </div>  
        </div>
    );
}