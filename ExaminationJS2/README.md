# ProjektReactSPA
## Av Robin Karlsson

➡️ Till en del av styling och funktionalitet har ChatGPT använts som ett stöd och lärande verktyg utanför lektionstid 😊

## The Gaming Hub 🎮

The Gaming Hub är en React-baserad Single Page Application (SPA) där användaren kan bläddra bland spel, söka efter spel och klicka sig vidare till en detaljsida för att läsa mer information.

Applikationen använder routing med React Router och hämtar speldata från RAWG API.

Projektet är byggt med Vite och använder TanStack Query för att hantera server-state samt caching, loading och error-states.


# ⭐ Starta projektet ⭐
1. Klona repot ➡️ git clone <repo-url>
2. Gå in i projektmappen ➡️ cd ProjektReactSPA
3. Installera NPM ➡️ npm install
4. Starta servern ➡️ npm run dev

# ---------------------------------------------------------------------------

# Uppfyllda krav (Checklista)

# G-krav

 ✅ React SPA med client-side routing (React Router)

 ✅ Minst 3 routes/views (Games, About, Contact + NotFound)

 ✅ Navigation sker med NavLink

 ✅ Appen består av flera komponenter (inte allt i App/main)

 ✅ Props används (ex: GameCard tar emot game via props)

 ✅ useState används för interaktivitet (sökfält i Games)

 ✅ Data hämtas från API med fetch i useEffect (ApiDemo-komponenten)

 ✅ Loading-state och enkel felhantering finns

 ✅ Hämtad data visas i UI

# VG-krav + Extra förbättringar

 ✅ Tydlig filstruktur (Pages, Components, Hooks, API)

 ✅ “Tekniska val – reflektion” (150+ ord)

 ✅ Extra route: detail view (/game/:id)

 ✅ Parameter-routing med useParams

 ✅ Pagination (nästa/föregående sida)

 ✅ Sökfunktion (useState + query)

## Routes / Views

| Route       | Beskrivning                           |
|-------------|----------------------------------------|
| `/`         | Lista med spel + sökning + pagination |
| `/game/:id` | Detaljsida för valt spel              |
| `/about`    | Info om projektet + API demo          |
| `/contact`  | Kontaktinformation                    |
| `*`         | 404 NotFound                          |

# ---------------------------------------------------------------------------

# ⭐ Tekniska val - reflektion ⭐

Tekniska val – reflektion (VG)

Jag har valt en tydlig mapp- och filstruktur där varje del av applikationen har ett tydligt ansvar. Under Pages/ ligger sidkomponenter som representerar hela views kopplade till routing, exempelvis Games, About, Contact, GameDetails och NotFound. Det gör det enkelt att skilja på vad som är en hel sida jämfört med mindre komponenter. Under Components/ ligger återanvändbara UI-komponenter som Navigation, GameCard och ApiDemo. Detta gör att jag kan använda samma komponenter på flera ställen utan att duplicera kod.

Jag har valt att placera routing i main.jsx med BrowserRouter och Routes eftersom det ger en central plats där man direkt kan se hela appens navigationsstruktur. Navigation-komponenten ligger utanför <Routes> vilket gör att headern alltid visas oavsett vilken sida man är på.

Komponentindelningen är uppbyggd för att separera logik och presentation. Exempelvis ansvarar Games.jsx för state, pagination och sökning, medan GameCard.jsx enbart visar upp ett spel visuellt. Props används genom att GameCard tar emot game som prop, vilket gör komponenten flexibel och återanvändbar.

State-lösningen är uppdelad i UI-state och server-state. useState används för interaktivitet som sökfältet, eftersom det är användarinput. För API-data används TanStack Query vilket ger caching och hantering av loading/error automatiskt. Jag har även skapat en egen hook (useGames) som samlar query-logiken på ett ställe, vilket gör koden mer organiserad och enklare att underhålla.

# Varför jag valde RAWG API
Jag valde RAWG API eftersom det har ett väldigt stort spelbibliotek med både äldre och nya spel, samt information om kommande releaser. Det passade perfekt för min idé med The Gaming Hub, eftersom målet var att skapa en spelkatalog som fungerar ungefär som en “IMDB fast för spel”. API:et var även relativt lätt att använda och hade tydlig struktur på datan, vilket gjorde det smidigt att implementera både spellista, sökning och en detaljsida för varje spel.

# Extra: useEffect + fetch krav (för tydlighet)
För att uppfylla grundkravet kring useEffect och fetch finns komponenten ApiDemo.jsx som gör ett enkelt API-anrop vid mount och visar status (API OK / error). I resten av applikationen används istället TanStack Query eftersom det ger bättre struktur och datahantering.