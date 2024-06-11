import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createServerClient, CookieOptions } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/"; // Default redirect URL if 'next' parameter is not provided

  const origin = "https://movieapp-frontend-tau.vercel.app";

  // Log the origin and environment for debugging
  console.log("Environment:", process.env.NODE_ENV);
  console.log("VERCEL_URL:", process.env.VERCEL_URL);
  console.log("Origin:", origin);

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options });
          },
        },
      }
    );
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}/protected`);
    }
  }

  // Redirect to an error page if the code exchange fails
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
