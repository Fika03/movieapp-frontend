import { createClient } from "@/utils/supabase/server";
import AuthButton from "../AuthButton";
import { Navigate } from "../navigation/Navigate";

export const Header = () => {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className=" w-full flex flex-col  items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
          <Navigate navigateTo="./checkout">Go to checkout</Navigate>
        </div>
      </nav>
    </div>
  );
};
