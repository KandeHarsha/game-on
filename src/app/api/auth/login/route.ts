import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const response = await fetch(process.env.GAME_ON_BACKEND_BASE_URL + "/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: (error as Error).message },
      { status: 500 }
    );
  }
}
