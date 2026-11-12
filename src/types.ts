// The data model: what is saved for one day.
// NOTE: this is a suggestion. The group decides together if anything should change.
export type DayEntry = {
  date: string; // the date, e.g. "2026-11-12"
  water: number; // number of glasses of water
  sleepHours: number; // hours of sleep, e.g. 7.5
  mood: number; // mood from 1 to 5
  note: string; // short note about the day
};
