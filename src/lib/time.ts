/** '13:30' -> '1.30 pm', matching how the site writes times. */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}.${String(m).padStart(2, '0')} ${suffix}`;
}
