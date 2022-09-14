import "../styles/globals.css";

import { supabase } from "../database/Database";
import { useEffect } from "react";
import UserProvider from "../database/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
