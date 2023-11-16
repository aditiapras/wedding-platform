import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req) {
  const url = req.nextUrl;

  let hostname = req.headers
    .get("host")
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  const searchParams = req.nextUrl.searchParams.toString();

  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  if (hostname == `dashboard.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const session = await getToken({ req });
    // if (!session) {
    //   return NextResponse.redirect(`http://localhost:3000/login`);
    // }
    return NextResponse.rewrite(
      new URL(`/dashboard${path === "/" ? "" : path}`, req.url)
    );
  }

  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`/app${path === "/" ? "" : path}`, req.url)
    );
  }

  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
