import Portfolio from "../portfolio"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marc Melgar - Computer Engineer",
  description:
    "Portfolio of Marc Melgar, Computer Engineer specializing in software development, hardware integration, and data-driven solutions.",
}

export default function Page() {
  return <Portfolio />
}
