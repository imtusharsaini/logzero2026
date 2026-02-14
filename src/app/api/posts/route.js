export async function GET(request) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();

    const url = `${backendUrl}/posts${queryString ? "?" + queryString : ""}`;

    const token = request.headers.get("authorization");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: token }),
      },
    });

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const body = await request.json();
    const token = request.headers.get("authorization");

    const response = await fetch(`${backendUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: token }),
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error creating post:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
