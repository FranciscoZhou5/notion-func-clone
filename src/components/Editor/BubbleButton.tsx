import { ComponentProps } from "react";

interface IBubbleButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export default function BubbleButton(props: IBubbleButtonProps) {
  return (
    <button
      className="p-2 text-zinc-300 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:text-violet-400"
      {...props}
    >
      {props.children}
    </button>
  );
}
