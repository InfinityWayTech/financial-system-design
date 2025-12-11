import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function formatDate(date: string): string {
  if (!date) return "-"

  try {
    const m = date.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s].*)?$/)
    if (m) {
      const y = Number(m[1])
      const mo = Number(m[2]) - 1
      const d = Number(m[3])
      const localDate = new Date(y, mo, d)
      return localDate.toLocaleDateString("pt-BR")
    }
    const d = new Date(date)
    return d.toLocaleDateString("pt-BR")
  } catch {
    return date
  }
}
