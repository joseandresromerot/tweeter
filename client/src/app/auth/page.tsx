"use client";

import Image from "next/image";
import logo from '../../../public/devchallengesLight.svg';
import { useState } from "react";
import AuthField from "@/components/auth/AuthField";

interface PageState {
  isLoginPage: boolean
  formData: {
    username: string
    password: string
    fullname: string
    avatar_url: string
  }
};

const FORM_INITIAL_STATE = {
  username: "",
  password: "",
  fullname: "",
  avatar_url: ""
};

const Page = () => {
  const [isLoginPage, setIsLoginPage] = useState<PageState["isLoginPage"]>(true);
  const [formData, setFormData] = useState<PageState["formData"]>(FORM_INITIAL_STATE);
  const { username, password, fullname, avatar_url } = formData;

  const handleFormDataChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-row items-center justify-center">
      <div className="w-full bg-transparent rounded-xl border outline-white mx-8 p-8 flex flex-col items-stretch sm:w-[450px]">
        <Image src={logo} alt="App logo" className="mb-6"/>

        {!isLoginPage &&
            <>
              <h3 className="font-sans font-bold text-lg mb-5">{"Join thousands of learners from around the world"}</h3>
              <h3 className="font-sans mb-7">{"Master web development by making real-life projects. There are multiple paths for you to choose"}</h3>
            </>
          }

        <h2 className="text-white text-xl font-sans mb-7 font-bold">{isLoginPage ? "Login" :  "Create Account"}</h2>

        <form className="flex flex-col items-stretch">
          <AuthField
            containerClassName="mb-5"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleFormDataChange}
          />

          <AuthField
            containerClassName="mb-5"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleFormDataChange}
            type="password"
          />

          {!isLoginPage &&
            <>
              <AuthField
                containerClassName="mb-5"
                placeholder="Full Name"
                name="fullname"
                value={fullname}
                onChange={handleFormDataChange}
              />

              <AuthField
                containerClassName="mb-5"
                placeholder="Avatar URL"
                name="avatar_url"
                value={avatar_url}
                onChange={handleFormDataChange}
              />
            </>
          }

          <button className="bg-blue-500 h-[45px] rounded-xl font-sans mt-4">{isLoginPage ? "Login" : "Start coding now"}</button>
        </form>

        <button type="button" className="bg-transparent font-extralight font-sans text-md mt-7 text-gray-400" onClick={() => setIsLoginPage(!isLoginPage) }>
          {isLoginPage ? "Don't have an account yet? Register" : "Adready a member? Login"}
        </button>
      </div>
    </div>
  );
}

export default Page;