import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type AnchorProps = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "className" | "href"
  > & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className"
  > & {
    href?: never;
  };

type ButtonProps =
  | AnchorProps
  | NativeButtonProps;

const baseStyles =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white shadow-[0_0_35px_rgba(37,99,235,0.28)] hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(6,182,212,0.36)]",

  secondary:
    "border border-slate-300 bg-white/70 text-slate-950 backdrop-blur-md hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 dark:border-cyan-400/60 dark:bg-slate-950/40 dark:text-white dark:hover:border-cyan-300 dark:hover:bg-cyan-400/10",
};

function isAnchorButton(
  props: ButtonProps,
): props is AnchorProps {
  return (
    "href" in props &&
    typeof props.href === "string"
  );
}

export function Button(
  props: ButtonProps,
) {
  const {
    variant = "primary",
    className = "",
  } = props;

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // Link button
  if (isAnchorButton(props)) {
    const {
      children,
      variant: _variant,
      className: _className,
      href,
      ...anchorProps
    } = props;

    return (
      <a
        href={href}
        className={styles}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  // Native button
  const {
    children,
    variant: _variant,
    className: _className,
    href: _href,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={styles}
      {...buttonProps}
    >
      {children}
    </button>
  );
}