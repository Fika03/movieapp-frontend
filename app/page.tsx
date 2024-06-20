import { SelectMoviePage } from "@/components/MovieComponents/pagination/SelectMoviePage";
import { redirect } from "next/navigation";

export default async function Index() {
  redirect("/movies");
  // return (
  //   <div className=" w-full flex flex-col  items-center">
  //     <div className="flex flex-col justify-center items-center w-[90%]">
  //       <SelectMoviePage />
  //     </div>
  //   </div>
  // );
}
