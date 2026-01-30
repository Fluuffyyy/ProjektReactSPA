# ProjektReactSPA
### Av Robin Karlsson

> Till stor del av styling och funktionalitet har ChatGPT använts som ett stöd och lärande verktyg utanför lektionstid 😊

Detta är en **Single Page Application (SPA)** byggd i **React** som en del av **Examination – JavaScript 2**.

Själva app-koden ligger i mappen `ExaminationJS2`.

---

## 📋 Innehåll
1. Om projektet
2. Funktioner
3. Tech stack
4. Datahantering med TanStack Query
5. Installation & start
6. Scripts
7. Projektstruktur
8. Vad jag lärt mig

---

## 💡 Om projektet
Projektet är en React-app där användaren kan se och interagera med data som hämtas från ett externt API.

Syfte:
- Öva på React-komponenter
- Arbeta med routing
- Hantera API-data effektivt

Målet är att skapa en modern, responsiv och interaktiv webbapplikation.

---

## 🚀 Funktioner
Appen erbjuder bland annat:
- 🚧 Navigering mellan sidor utan omladdning (SPA)
- 📦 Visning av data från API
- ⏳ Hantering av laddnings- och felstatus
- 🔁 Caching av data för bättre prestanda

---

## ⚙️ Tech stack
Det här projektet använder:

- **React** – UI-bibliotek för komponenter
- **React Router** – För navigering mellan sidor
- **TanStack Query (React Query)** – För datahämtning och caching
- **Fetch API** – För att göra HTTP-anrop
- **CSS** – Stilar

---

## 🔎 Datahantering med TanStack Query
Vi använder **TanStack Query** (tidigare kallad React Query) för att:

- 🌀 hämta data från ett API
- 📌 cacha resultat så de inte hämtas om onödigt
- ⏳ hantera laddningsstatus (`isLoading`)
- ❌ hantera fel (`error`)
- 🔄 automatiskt synkronisera data

Detta gör datalogiken enklare, renare och mer skalbar jämfört med att använda `useState` och `useEffect` manuellt.

TanStack Query används för att hantera så kallad *server state*, vilket skiljer sig från vanlig lokal state i React.

Exempel i koden:

```js
const { data, isLoading, error } = useQuery({
  queryKey: ['items'],
  queryFn: fetchItems
})
