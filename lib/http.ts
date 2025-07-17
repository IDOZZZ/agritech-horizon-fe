export const BASE_URL = "https://backend.horizone.biz.id"; // Replace with your Strapi backend URL

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
        // Ensure token is only added if it exists and we are in a browser environment
        // Do not add Authorization header for public endpoints like /api/categories
        ...(typeof window !== 'undefined' && localStorage.getItem('token') && endpoint !== "/api/categories"
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
