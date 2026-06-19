import { Badge } from "../../marketing-general/badge"
import { HeroImageSection } from "./hero-image-section"

export const Hero = () => {
  return (
    <div className="z-10 min-h-[92vh] bg-green-300">
      <div className="h-[70vh] w-full bg-amber-100">
        <Badge text="Devoted to You. Dangerous to Everyone Else." />
      </div>
      <HeroImageSection />
    </div>
  )
}
