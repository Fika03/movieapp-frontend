import { SelectMoviePage } from "@/components/MovieComponents/pagination/SelectMoviePage";

export default async function Index() {
  return (
    <div className=" w-full flex flex-col  items-center">
      <div className="flex flex-col justify-center items-center w-[90%]">
        <SelectMoviePage />
      </div>
    </div>
  );
}
