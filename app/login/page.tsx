import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary/10 px-4 py-12 sm:px-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-2xl">
              E
            </div>
            <span className="text-2xl font-bold tracking-tight">Educore</span>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Please enter your details to sign in.</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-primary hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  )
}
