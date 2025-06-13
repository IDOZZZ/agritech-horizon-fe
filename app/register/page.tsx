// import AuthWelcome from "@/components/auth/AuthWelcome";
import AuthForm from "@/components/auth/AuthForm";
import WelcomeSlider from "@/components/auth/AuthWelcome";

export default function LoginPage() {
  return (
  //   <div className="flex items-center justify-center min-h-screen bg-horizon-light">
  //     <div className="flex w-full max-w-[85vw] min-h-[80vh] rounded-2xl overflow-hidden shadow-lg">
  //       <WelcomeSlider />
  //       <AuthForm mode="register" />
  //     </div>
  //   </div>
  // );
  <div className="flex items-center justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-5xl overflow-hidden bg-white border border-gray-100 shadow-xl card rounded-3xl">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <WelcomeSlider />
          <AuthForm mode="register" />
        </div>

      </div>
    </div>
  );  
}

