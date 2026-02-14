export async function GET(request, { params }) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const { id } = await params;
    const token = request.headers.get("authorization");

    const response = await fetch(`${backendUrl}/posts/${id}`, {
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
    console.error("Error fetching post:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const { id } = await params;
    const token = request.headers.get("authorization");

    const response = await fetch(`${backendUrl}/posts/${id}`, {
      method: "DELETE",
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
    console.error("Error deleting post:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const { id } = await params;
    const body = await request.json();
    const token = request.headers.get("authorization");

    const response = await fetch(`${backendUrl}/posts/${id}`, {
      method: "PATCH",
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
    console.error("Error updating post:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
