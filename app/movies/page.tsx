import { SelectMoviePage } from "@/components/MovieComponents/pagination/SelectMoviePage";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Movies() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/protected");
  }

  return (
    <div className=" w-full flex flex-col  items-center">
      <SelectMoviePage />
    </div>
  );
}
