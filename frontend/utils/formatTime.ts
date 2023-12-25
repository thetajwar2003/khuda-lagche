export function formatTime(ms: number) {
  const inputDate = new Date(ms);
  const today = new Date();

  const isToday = inputDate.toDateString() === today.toDateString();
  const displayDate = isToday
    ? inputDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : inputDate.toLocaleDateString();

  return displayDate;
}
