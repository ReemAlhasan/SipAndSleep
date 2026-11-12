# Sip & Sleep

A web app where you log water, sleep and mood and see your history.
Project group 7 in TNM040. Built with React, TypeScript and Vite.

## Getting started (do this once)

```
git clone https://github.com/ReemAlhasan/SipAndSleep.git
cd SipAndSleep
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

## How we work

1. Get the latest code: `git checkout main` and `git pull`
2. Create your own branch: `git checkout -b my-branch-name`
3. Write code, then save it with `git add .` and `git commit -m "what I did"`
4. Upload it: `git push -u origin my-branch-name`
5. Open a pull request on GitHub. The group reviews it at the Thursday meeting.

The code in `main` must always work. Never work directly in `main`.

## Folders and files

- `src/main.tsx` starts React
- `src/App.tsx` handles routing (which page is shown)
- `src/pages/` one file per page
- `src/components/` parts used on several pages, e.g. `NavBar`
- `src/types.ts` the data model (`DayEntry`)
- `src/index.css` shared base styles
