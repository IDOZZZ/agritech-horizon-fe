type Props = {
  type: 'login' | 'register';
};

export default function AuthForm({ type }: Props) {
  return (
    <div className="flex-1 flex flex-col justify-center bg-white p-10 rounded-r-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{type === 'login' ? 'Welcome Back' : 'Get Started'}</h2>
      <p className="text-sm mb-6">
        {type === 'login' ? "Belum punya akun? " : "Sudah punya akun? "}
        <a href={type === 'login' ? '/register' : '/login'} className="text-horizon font-semibold">
          {type === 'login' ? 'Daftar' : 'Login'}
        </a>
      </p>

      <form className="space-y-4">
        {type === 'register' && (
          <input type="text" placeholder="Name" className="input" />
        )}
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />

        <button type="submit" className="bg-green-400 text-white w-full py-2 rounded-md">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">or sign up with</p>
        <div className="flex justify-center gap-4 mt-2">
          {/* Dummy social buttons */}
          <button className="w-8 h-8 bg-gray-100 rounded-full">G</button>
          <button className="w-8 h-8 bg-gray-100 rounded-full">T</button>
          <button className="w-8 h-8 bg-gray-100 rounded-full">F</button>
        </div>
      </div>
    </div>
  );
}
