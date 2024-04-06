import React from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const handleGoToAnotherPage = () => {
    // 指定されたURLに遷移する
    router.push("/components/Home");
  };

  return (
    <div>
      <div className="bg-cover bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="font-bold text-4xl mb-6">シンプルな収支管理アプリ</h1>
          <p className="text-lg mb-8">収支を簡単に管理しましょう</p>
          {/* ページ間の遷移用のリンク */}
          <button
            onClick={handleGoToAnotherPage}
            className="text-lg bg-white text-black px-4 py-2 rounded-md"
          >
            収支を管理する
          </button>
        </div>
      </div>
    </div>
  );
}
