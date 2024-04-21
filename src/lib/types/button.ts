import type { SvelteComponent } from "svelte";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonVariant = "primary" | "secondary";

export type ButtonState = "active" | "disabled";

export type ButtonIcon = typeof SvelteComponent | string | null;

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  icon?: ButtonIcon;
  label?: string;
  restProps?: Record<string, any>;
}
