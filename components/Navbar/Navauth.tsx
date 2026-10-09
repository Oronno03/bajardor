"use client";
import NotLoggedIn from "./NotLoggedIn";
import { authClient } from "@/lib/auth-client";
import Loggedin from "./Loggedin";

const Navauth = () => {

  const {data: session, isPending} = authClient.useSession();

  if(isPending) return;

  return (
    <div>
      {
        session?.user ? <Loggedin session={session} /> : <NotLoggedIn />
      }
    </div>
  );
};

export default Navauth;
