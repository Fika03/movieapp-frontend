import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SelectMoviePage } from "@/components/MovieComponents/pagination/SelectMoviePage";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <section className=" w-full flex flex-col  items-center ">
      <SelectMoviePage />
    </section>
  );
}
