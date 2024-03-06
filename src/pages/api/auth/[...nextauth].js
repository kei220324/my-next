import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: "792244a0c32e5896a012",
      clientSecret: "18ad7e9a91f36fe15111a3429f690ded9c46cfa6",
    }),
  ],
   session: {
    strategy: "jwt",
     maxAge: 3 * 24 * 60 * 60,
  }

  /* jwt */
  // session: { strategy: "jwt" },
  // callbacks: {
  //   async session({ session, token }) {
  //     session.user.accessToken = token.accessToken;
  //     return session;
  //   },

  // }


});
