import AuthWelcome from "@/components/auth/AuthWelcome";
import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-horizon-light">
      <div className="flex w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        <AuthWelcome />
        <AuthForm type="login" />
      </div>
    </div>
  );
}
