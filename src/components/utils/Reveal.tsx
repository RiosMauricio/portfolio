import { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.15, true);
  const classes = ["reveal", inView ? "is-revealed" : "", className ?? ""]
    .join(" ")
    .trim();

  return (
    <div
      ref={ref}
      className={classes}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
};
