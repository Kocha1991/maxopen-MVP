export async function POST(
  req
) {
  
  const data = await req.json();
  console.log(data);

  if (!data) {
    return new Response(
      JSON.stringify({ message: "form data is required" }),
      { status: 400 }
    );
  }

  const formData = new FormData();
    formData.append('name', data.name); 
    formData.append('email', data.email);
    formData.append('message', data.message);

    return fetch('https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/сustomer-data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN_POST}`,
      },
      body: formData,
    }).then((res) => {
      return new Response(
        JSON.stringify({ message: "Data received", data: data }),
        { status: 201 }
      )
    }
      
    )
    .catch((err) => {
      console.error(err);
      return new Response(
        JSON.stringify({ message: "event could not be submitted" }),
        { status: 500 }
      );
    });
}