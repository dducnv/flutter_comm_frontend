import React from "react";
import { useRouter } from "next/router";
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from "@/utils/contants";
type Props = {};

const LoginPage = (props: Props) => {
  const { push, asPath } = useRouter();
  const loginWithFacebook = () => push(FACEBOOK_AUTH_URL);
  const loginWithGoogle = () => push(GOOGLE_AUTH_URL);
  return (
    <React.Fragment>
      <div className="py-60  ">
        <div
          className="max-w-lg h-40 border m-auto flex  px-2  content-center 
      rounded-lg shadow backdrop-blur-xl
      "
        >
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl font-bold mb-3">Đăng nhập</h1>
            <button
              onClick={() => loginWithFacebook()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mb-3"
            >
              Đăng nhập với Facebook
            </button>
            <button
              onClick={() => loginWithGoogle()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md  w-full"
            >
              Đăng nhập với Google
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
