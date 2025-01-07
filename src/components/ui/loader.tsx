import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function Loader({ className, size = "md", ...props }: LoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-gray-600 border-t-gray-50",
        sizeClasses[size],
        className,
      )}
      {...props}
    ></div>
  );
}
