import { ShimmerText } from "./shimmer-text"

export const Badge = ({ text }: { text: string }) => {
  return (
    <ShimmerText
      duration={1.2}
      className="text-sm font-normal [--base-color:var(--color-brand)] [--base-gradient-color:#fff] dark:[--base-color:var(--color-brand)] dark:[--base-gradient-color:#fff]"
    >
      {text}
    </ShimmerText>
  )
}
