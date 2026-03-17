"use client"

import Link from "next/link"

import * as React from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Mail, Lock, User, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: any) {
    setIsLoading(true)
    // Simulate API call
    console.log("[v0] Register data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    router.push("/dashboard")
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input placeholder="John Doe" className="pl-9 h-11 rounded-xl" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input placeholder="name@example.com" className="pl-9 h-11 rounded-xl" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input type="password" placeholder="••••••••" className="pl-9 h-11 rounded-xl" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-xs text-muted-foreground leading-relaxed">
            By clicking Sign Up, you agree to our{" "}
            <Link href="#" className="underline hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>

          <Button type="submit" className="w-full h-11 rounded-xl font-bold" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create Account"}
          </Button>
        </form>
      </Form>
    </motion.div>
  )
}
