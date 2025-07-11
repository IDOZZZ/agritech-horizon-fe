export const BASE_URL = "http://127.0.0.1:1337"; // Replace with your Strapi backend URL

export async function httpRequest(endpoint: string, options: RequestInit) {
  console.log("Sending request to:", `${BASE_URL}${endpoint}`);
  console.log("Payload:", options.body);

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        // Tambahkan header Authorization jika token tersedia
        ...(typeof window !== 'undefined' && localStorage.getItem('token')
          ? { Authorization: `Bearer ${localStorage.getItem('token')}` }
          : {}),
      },
    });

    if (!response.ok) {
      const contentType = response.headers.get("Content-Type");
      let errorMessage = `Error ${response.status}: ${response.statusText}`;

      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } else {
        errorMessage = await response.text();
      }
//1
      return { error: true, message: errorMessage, status: response.status };
    }

    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("HTTP Request Error:", error);
    throw error;
  }
}
