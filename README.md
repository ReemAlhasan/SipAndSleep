# Sip & Sleep

Webbapp där man registrerar vatten, sömn och humör och ser sin historik.
Projektgrupp 7 i TNM040. Byggd med React, TypeScript och Vite.

## Kom igång (görs en gång)

```
git clone https://github.com/ReemAlhasan/SipAndSleep.git
cd SipAndSleep
npm install
npm run dev
```

Öppna sedan adressen som visas i terminalen (oftast http://localhost:5173).

## Så jobbar vi

1. Hämta det senaste: `git checkout main` och `git pull`
2. Skapa en egen branch: `git checkout -b mitt-branchnamn`
3. Koda, och spara med `git add .` och `git commit -m "vad jag gjorde"`
4. Ladda upp: `git push -u origin mitt-branchnamn`
5. Öppna en pull request på GitHub. Gruppen granskar den på torsdagsträffen.

Koden i `main` ska alltid fungera. Jobba aldrig direkt i `main`.

## Mappar och filer

- `src/main.tsx` startar React
- `src/App.tsx` sköter routing (vilken sida som visas)
- `src/pages/` en fil per sida
- `src/components/` delar som används på flera sidor, t.ex. `NavBar`
- `src/types.ts` datamodellen (`DayEntry`)
- `src/index.css` gemensam grundstil
