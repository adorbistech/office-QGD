"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    // Redirect to the target URL when the app is opened
    window.location.href = "https://qgd.agency/login"
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold">QGD Agency Login</h1>
        <p className="text-gray-600">If you are not automatically redirected, please click the button below.</p>
        <Button onClick={() => window.open("https://qgd.agency/login", "_blank")} className="w-full">
          Go to Login <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  )
}