const WORDS = [
  "UNCENSORED",
  "PRIVACY",
  "WORKING",
  "DEVOTED",
  "RESEARCH",
  "DEFENDS",
  "PRIVATE",
  "LOCAL",
  "MEMORY",
]

export const HeroImageSection = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      <img
        src="/images/hero-image.webp"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Words overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-8 text-center">
          {WORDS.map((word) => (
            <span
              key={word}
              className="font-serif text-3xl font-light tracking-[0.25em] text-white md:text-4xl lg:text-5xl"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
