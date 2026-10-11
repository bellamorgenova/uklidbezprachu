import { formatFrontmatterDate } from "@/lib/date";

export function FormattedDate({ date }: { date: Date }) {
  return <time dateTime={date.toISOString()}>{formatFrontmatterDate(date)}</time>;
}
