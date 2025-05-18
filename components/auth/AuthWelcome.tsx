export default function AuthWelcome() {
  return (
    <div className="flex-1 bg-gradient-to-br from-horizon-light to-horizon p-10 text-black rounded-l-2xl flex flex-col justify-between">
      <div>
        <img src="/logo.png" alt="Horizon Logo" className="w-12 h-12 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Welcome to Horizon</h2>
        <p className="text-sm">Kami adalah komunitas untuk saling membantu dan berbagi.</p>
      </div>
      <div className="flex justify-center space-x-2 mt-10">
        {/* Placeholder image cards */}
        {["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"].map((src, i) => (
          <img key={i} src={src} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
        ))}
      </div>
    </div>
  );
}
