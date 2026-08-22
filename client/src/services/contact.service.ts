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
  const apiUrl =
    import.meta.env.VITE_API_URL;

  const response = await fetch(
    `${apiUrl}/api/contact`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    },
  );

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