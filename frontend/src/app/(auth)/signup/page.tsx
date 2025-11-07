import { SignupForm } from "@/components/signup-form"
import { GridBackgroundDemo } from "@/components/ui/GridBackground"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
      <div className="absolute inset-0 -z-10">
          <GridBackgroundDemo />
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
