/**
 * Type declarations para @tarta/ui.
 *
 * El paquete es JavaScript puro (.jsx) — este .d.ts es el único puente
 * con TypeScript. Cualquier primitive nuevo tiene que quedar reflejado
 * aquí para que las apps consumidoras (Next.js con TS strict) compilen.
 */

import type {
  ButtonHTMLAttributes,
  ElementType,
  ForwardRefExoticComponent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  RefAttributes,
  TextareaHTMLAttributes,
} from "react";

// ── Button ───────────────────────────────────────────────

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
>;

// ── Input / Textarea ─────────────────────────────────────

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Input: ForwardRefExoticComponent<
  InputProps & RefAttributes<HTMLInputElement>
>;

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea: ForwardRefExoticComponent<
  TextareaProps & RefAttributes<HTMLTextAreaElement>
>;

// ── Card ─────────────────────────────────────────────────

export interface CardProps extends HTMLAttributes<HTMLElement> {
  hover?: boolean;
  premium?: boolean;
  as?: ElementType;
  children?: ReactNode;
}

export const Card: ForwardRefExoticComponent<
  CardProps & RefAttributes<HTMLElement>
>;

// ── Badge ────────────────────────────────────────────────

export type BadgeTone =
  | "neutral"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  children?: ReactNode;
}

export const Badge: ForwardRefExoticComponent<
  BadgeProps & RefAttributes<HTMLSpanElement>
>;

// ── Tabs ─────────────────────────────────────────────────

export interface TabDef {
  id: string;
  label: ReactNode;
  count?: number;
}

export interface TabsProps {
  tabs: TabDef[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export function Tabs(props: TabsProps): JSX.Element;

// ── Utils ────────────────────────────────────────────────

export function cn(
  ...classes: Array<string | number | false | null | undefined>
): string;
