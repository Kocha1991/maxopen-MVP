export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.email) {
      return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
    }

    const formData = new FormData();
    formData.append("email", data.email);

    const response = await fetch(
      "https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/сustomer-data",
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN_POST}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to subscribe");
    }

    return new Response(JSON.stringify({ message: "Subscribed successfully" }), { status: 201 });
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(JSON.stringify({ message: "Subscription failed" }), { status: 500 });
  }
}
