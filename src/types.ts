// Datamodellen: det som sparas för en dag.
// OBS: detta är ett förslag. Gruppen bestämmer tillsammans om något ska ändras.
export type DayEntry = {
  date: string; // datumet, t.ex. "2026-11-12"
  water: number; // antal glas vatten
  sleepHours: number; // timmar sömn, t.ex. 7.5
  mood: number; // humör från 1 till 5
  note: string; // kort anteckning om dagen
};
