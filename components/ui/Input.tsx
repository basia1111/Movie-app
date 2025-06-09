const Input = ({ ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      {...props}
      className="border-border-primary placeholder:text-text-muted text-white flex h-10 w-full rounded-md border bg-input px-3 py-2 text-xs shadow-xs disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
      focus:outline-none focus:ring-2 focus:ring-focus/20
             focus:border-focus transition-all"
    />
  );
};

export default Input;
