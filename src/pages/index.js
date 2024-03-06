import React from "react";
import { useSession, signIn,signOut} from "next-auth/react";
import { useRouter } from "next/router";

import { useEffect } from "react";
const HomePage = () => {
  const router = useRouter();
  const { data: session } = useSession();


  const handleSignIn = () => {
    // 認証が未確認または未認証の場合にのみ signIn を呼ぶ
    if (session) {
      signIn("github", {
        callbackUrl: "http://localhost:3000/components/Home",
      });
    }
  };

  return (
    <div>
      <div className="bg-cover bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="font-bold text-4xl mb-6">シンプルな家計簿アプリ</h1>
          <p className="text-lg mb-8">収支を簡単に管理しましょう</p>
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/components/Home",
              })
            }
            type="button"
            className="bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-6 py-3 inline-flex items-center"
          >
            Sign in with Github
          </button>
        </div>
      </div>
    </div>
  );
  if (session) {
    // 認証されている場合の処理
    return <p>Welcome, {session.user.name}!</p>;
  } else {
    // 認証されていない場合の処理1️⃣
    return <p>Please sign in to access this content.</p>;
  }
}


export default HomePage;
