import { Plane } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <Plane className="size-5 text-primary" />
            <span className="font-bold text-lg">flightclub.lol</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground italic text-center">
            {`"The house always wins — unless the house is a mutual aid society."`}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            Not financial advice. Not insurance (yet). Just friends looking out
            for friends.
          </p>
          <p>CC BY-SA 4.0</p>
        </div>
      </div>
    </footer>
  )
}
