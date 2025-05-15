export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <div className="text-5xl">🚫</div>
      <h1 className="text-4xl font-bold mt-4">401</h1>
      <p className="mt-2">You are not authorized to view this page.</p>
      <a href="/" className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">Go Back</a>
    </div>
  );
}
// This is a simple 401 Unauthorized error page for a Next.js application.
// It displays an error message and a button to go back to the home page.