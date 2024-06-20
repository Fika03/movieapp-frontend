"use client";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { createClient } from "@/utils/supabase/server";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string; error: string; source: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("Sign In Error:", error);
      return redirect(`/login?message=Could not authenticate user`);
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log("Sign Up Error:", error);
      return redirect(
        `/login?message=Could not authenticate user&error=${error.message}&source=signup`
      );
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  const signInWithGoogle = async () => {
    "use server";
    const supabase = createClient();

    const origin = "https://movieapp-frontend-tau.vercel.app";
    const origin2 = "http://localhost:3000";

    console.log("This is my origin:" + process.env.VERCEL_URL);

    // Log the origin for debugging
    console.log("Sign In with Google - Origin:", origin);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    console.log("data.url:", data.url);
    if (error) {
      console.error("Google Sign In Error:", error);
      return redirect("/login?message=Could not authenticate user");
    }
    return redirect(data.url);
  };

  return (
    <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 ">
      <Link
        href="/movies"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
        />
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
        {searchParams?.error && searchParams?.source === "signup" && (
          <p className="mt-2 p-4 bg-red-200 text-red-800 text-center">
            {searchParams.error}
          </p>
        )}
        <div className="w-full">
          <SubmitButton
            type="button"
            formAction={signInWithGoogle}
            className="bg-blue-600 rounded-md px-4 py-2 text-white mb-2 w-full"
            pendingText="Signing In..."
          >
            Sign In with Google
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
