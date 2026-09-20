export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

export async function sendContactMessage(
  data: ContactFormData,
): Promise<ContactResponse> {
  const response = await fetch(
    "/api/contact",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(data),
    },
  );

  const contentType =
    response.headers.get(
      "content-type",
    );

  if (
    !contentType?.includes(
      "application/json",
    )
  ) {
    console.error(
      "Unexpected contact response:",
      await response.text(),
    );

    throw new Error(
      "Contact server returned an invalid response.",
    );
  }

  const result =
    (await response.json()) as ContactResponse;

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Unable to send message.",
    );
  }

  return result;
}