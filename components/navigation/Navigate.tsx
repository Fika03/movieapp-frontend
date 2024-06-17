"use client";
import { useRouter } from "next/navigation";

interface IPropNavigate {
  children: string;
  navigateTo: string;
}

export const Navigate = ({ children, navigateTo }: IPropNavigate) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(navigateTo)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-full"
    >
      {children}
    </button>
  );
};
