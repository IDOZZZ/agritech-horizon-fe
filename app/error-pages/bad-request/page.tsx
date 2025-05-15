export default function BadRequest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <div className="text-5xl">❗</div>
      <h1 className="text-4xl font-bold mt-4">400</h1>
      <p className="mt-2">Bad request. Something’s wrong with the input.</p>
      <a href="/" className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">Go Back</a>
    </div>
  );
}
// // This is a simple 400 Bad Request error page for a Next.js application.
// // It displays an error message and a button to go back to the home page.