import { LucideIcon } from "lucide-react";

const variants = {
  default: "bg-brand-primary text-white shadow-xs hover:bg-brand-primary/90",
  outline:
    "border border-border bg-transparent text-white shadow-xs hover:bg-hover hover:text-white",
  secondary: "bg-secondary text-white shadow-xs hover:bg-bg-secondary/80",
  ghost: "text-text-secondary hover:bg-hover hover:text-white",
  link: "text-brand-primary underline-offset-4 hover:underline",
} as const;

const sizes = {
  default: "h-9 px-4 py-2 rounded",
  sm: "h-8 rounded-md gap-1.5",
  lg: "h-10 rounded-md px-6",
  icon: "size-9",
} as const;

type VariantType = keyof typeof variants;
type SizeType = keyof typeof sizes;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  icon?: LucideIcon;
  variant?: VariantType;
  size?: SizeType;
}

const Button = ({
  content,
  icon: Icon,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={
        variants[variant] +
        " hover:opacity-95 cursor-pointer transition-all" +
        sizes[size]
      }
      {...props}
    >
      {content} {Icon && <Icon size={14} />}
    </button>
  );
};

export default Button;
