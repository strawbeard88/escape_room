# Escape the System – Project NEXUS

> Ett escape room-spel byggt i **React + TypeScript** med React Router v6 och Context API.

Du är instängd i en övergiven AI-forskningsanläggning. Ta dig igenom sex rum, lös pusslen och samla föremålen som leder dig till friheten.

---

## Starta projektet

```bash
npm install
npm run dev
```

Öppna sedan [http://localhost:5173](http://localhost:5173) i webbläsaren.

---

## Bilder

Lärarens bilder placeras i `public/images/`. Filnamnen i `src/data/rooms.json` och `src/data/items.json` matchar bildfilerna.

---

## Implementerade krav

### G-krav

| # | Krav | Fil |
|---|------|-----|
| 1 | Routing med `BrowserRouter`, `Routes`, `Route` | `src/main.tsx`, `src/App.tsx` |
| 2 | Startsida på `/` | `src/pages/HomePage.tsx` |
| 3 | Navigation med `<Link>` till alla rum | `src/components/Navbar.tsx` |
| 4 | Alla rum renderas av **EN** komponent via `useParams()` | `src/pages/RoomPage.tsx` |
| 5 | Delad state med `createContext` + `useContext` | `src/context/GameContext.tsx` |
| 6 | Pussellogik: rätt föremål → rum löst + belöningsföremål i inventoriet | `src/pages/RoomPage.tsx` |
| 7 | Rum visar olöst/löst läge (bild + instruktionstext) | `src/pages/RoomPage.tsx` |
| 8 | Löst-status härleds från inventoriet: `inventory.some(i => i.id === room.itemToAdd)` | `src/pages/RoomPage.tsx` |
| 9 | Strukturerade komponenter, projektet startar utan fel | hela kodbasen |

### VG-krav

| # | Krav | Fil |
|---|------|-----|
| 1a | `useNavigate()` – Exit Node löst navigerar till `/victory` | `src/pages/RoomPage.tsx` |
| 1b | Ogiltig URL omdirigeras till `/` via catch-all route | `src/App.tsx` |
| 2 | `useSearchParams()` – `?hint=true` visar/döljer ledtråd per rum | `src/components/HintButton.tsx` |
| 3 | Tydlig komponentindelning, korrekt TypeScript-typning, jämförelser på `id` | hela kodbasen |

---

## Spelkedjan

```
Server Room   →(UV Light)→       Access Code
Security Room →(Access Code)→    Security Keycard
Archives      →(Keycard)→        Maintenance Key
Reactor Room  →(Maintenance Key)→ Admin Credentials
Vault         →(Admin Creds)→    Master Override Key
Exit Node     →(Override Key)→   FRIHET
```

Start inventory: **UV Light**

---

## Projektstruktur

```
src/
├── types/index.ts              – Interface: Room, Item, GameContextType
├── data/
│   ├── rooms.json              – Speldata för alla sex rum
│   └── items.json              – Speldata för alla sex föremål
├── context/
│   └── GameContext.tsx         – Inventorie-state, addItem, useGame-hook
├── components/
│   ├── Navbar.tsx              – Sidomnavigering med rumslänkar
│   ├── InventoryPanel.tsx      – Visar aktuellt inventory
│   └── HintButton.tsx          – Ledtråd via ?hint=true i URL
├── pages/
│   ├── HomePage.tsx            – Introduktion och rumslista
│   ├── RoomPage.tsx            – Rum-komponent (EN för alla sex rum)
│   └── VictoryPage.tsx         – Vinstskärm efter Exit Node
├── App.tsx                     – Routestruktur
└── main.tsx                    – Entry point: BrowserRouter + GameProvider
```
