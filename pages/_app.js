import "../styles/globals.css";

import { supabase } from "../database/Database";
import { useEffect } from "react";
import UserProvider from "../database/authContext";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <UserProvider>
      <Component {...pageProps} />
   </UserProvider>
  );
}

export default MyApp;
