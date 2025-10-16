
import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-500">
      <div className="w-full max-w-sm px-4">
        <LoginForm />
      </div>
    </div>
  );
}




