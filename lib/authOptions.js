
import { LoginUser } from "@/app/actions/auth/LoginUser";

import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./mongbd";
import userModel from "../models/UserModel";
import GoogleProvider from "next-auth/providers/google";
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
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
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




