import { cn } from "@/lib/utils";

type HighlightedTextProps = {
  text: string;
  highlights?: string[];
  className?: string;
  highlightClassName?: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function HighlightedText({
  text,
  highlights = [],
  className,
  highlightClassName = "font-semibold text-primary",
}: HighlightedTextProps) {
  if (!highlights.length) {
    return <span className={className}>{text}</span>;
  }

  const pattern = highlights.map(escapeRegExp).join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "gi"));

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isHighlight = highlights.some(
          (phrase) => phrase.toLowerCase() === part.toLowerCase(),
        );

        if (!isHighlight) return part;

        return (
          <span key={`${part}-${index}`} className={cn(highlightClassName)}>
            {part}
          </span>
        );
      })}
    </span>
  );
}
