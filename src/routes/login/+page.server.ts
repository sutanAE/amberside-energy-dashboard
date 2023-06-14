// future feature

// export const prerender = false;
// import { pb } from "../../pocketbase";
// import type { RequestEvent } from "./$types";
// import { redirect } from "@sveltejs/kit";

// export async function load({ cookies }:RequestEvent) {
   
// }

// export const actions = {
//     login: async ({request, cookies}: RequestEvent) => {
//         const form = await request.formData()
        
//         const username = form.get('username') as string
//         const password = form.get('password') as string
//         let errors: string[] = [];

//         if ( username.length < 3){
//             errors = [...errors, 'username must be at least 3 characters']
//         }

//         if (password.length < 8){
//             errors = [...errors, 'password must be atleast 8 characters long']
//         }

//         if (errors.length > 0){
//             return {
//                 success: false,
//                 errors: errors
//             }
//         }

//         try {
//             const authData = await pb.collection('users').authWithPassword(
//                 username, password
//             );
//             console.log(authData)
//             cookies.set('token', authData.token, {
//                 secure: false
//             })
            
//         } catch (e) {
//             console.log(e)
//             return  {
//                 success: false,
//                 errors: ['error']
//             }
//         }

//         throw redirect(303, '/welcome')

//     }
// }