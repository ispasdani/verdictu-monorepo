import { Navbar } from "../../marketing-general/navbars/navbar"
import { HeroImageSection } from "./hero-image-section"

export const Hero = () => {
  return (
    <div className="z-10 min-h-[92vh] bg-green-300">
      <div className="h-[65vh] w-full bg-amber-100">top div hero</div>
      <HeroImageSection />
    </div>
  )
}
