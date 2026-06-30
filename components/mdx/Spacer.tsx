export default function Spacer({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? "h-4" : size === "lg" ? "h-12" : "h-8";
  return <div className={`${h}`} aria-hidden="true" />;
}
