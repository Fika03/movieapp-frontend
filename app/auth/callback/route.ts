import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createServerClient, CookieOptions } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/"; // Default redirect URL if 'next' parameter is not provided

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
    console.log(
      `origin and next is logged here origin: ${origin} next: ${next}`
    );
    if (!error) {
      console.log(
        `origin and next is logged here origin: ${origin} next: ${next}`
      );
      return NextResponse.redirect(`${origin}/protected`);
    }
  }

  // Redirect to an error page if the code exchange fails
  console.log(`origin and next is logged here origin: ${origin} next: ${next}`);
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
