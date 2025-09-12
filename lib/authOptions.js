
import { LoginUser } from "@/app/actions/auth/LoginUser";

import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./mongbd";
import userModel from "../models/UserModel";

export const authOptions={
    providers: [
  CredentialsProvider({

    name: "Credentials",

    credentials: {
      email: { label: "email", type: "email", placeholder: "write email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

      const user = await LoginUser(credentials)
      // console.log( "user================>",user);
      if (user) {

        return user
      } else {

        return null
      }
    }
  })
],
page : {
    signIn: "/login"
},
callback:{
    async singIn({user,account, profile,email ,credentials}){
      await dbConnect()
        if(account){
            const {providersAccountId, provider}=account
            const {email: email,image,name}=user
            // const userCollection=dbConnect("userInfo")
            const isExisted= await userModel.findOne({providersAccountId})
            if(!isExisted){
                const payload={providersAccountId, provider,email:email , image ,name}
                await userCollection.insertOne(payload)
            }
        }
        
        return true
    }
}
}


// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// import bcrypt from "bcryptjs";
// import userModel from "../models/UserModel";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = await userModel.findOne({ email: credentials.email });
//         if (!user) return null;

//         const isPasswordValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         if (!isPasswordValid) return null;

//         return {
//           id: user._id.toString(),
//           name: user.name,
//           email: user.email,
//         };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },
// callback:{
//     async singIn({user,account, profile,email ,credentials}){
//         if(account){
//             const {providersAccountId, provider}=account
//             const {email: email,name}=user
//             const userCollection=dbConnect("userInfo")
//             const isExisted= await userCollection.findOne({providersAccountId})
//             if(!isExisted){
//                 const payload={providersAccountId, provider,email:email , image ,name}
//                 await userCollection.insertOne(payload)
//             }
//         }
        
//         return true
//     }
// }
// };

// export default NextAuth(authOptions);

