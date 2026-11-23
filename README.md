# 21restaurant.com — Al 21 · Maestri della Pasta

Sito statico in tre lingue (IT, FR, EN), pensato per GitHub Pages.

## Struttura

| Pagina | Italiano | Français | English |
|---|---|---|---|
| Home | `/` | `/fr/` | `/en/` |
| Menu | `/menucompleto/` | `/fr/menucompleto/` | `/en/menucompleto/` |
| Prenotazioni & Delivery | `/prenotazioni/` | `/fr/prenotazioni/` | `/en/prenotazioni/` |
| Delivery | `/delivery/` | `/fr/delivery/` | `/en/delivery/` |
| Eventi | `/eventi/` | `/fr/eventi/` | `/en/eventi/` |
| Contatti | `/contatti/` | `/fr/contatti/` | `/en/contatti/` |

Gli indirizzi sono gli stessi del sito Wix, quindi i QR code già stampati (es. `/prenotazioni`) continuano a funzionare. Il vecchio blog non esiste più: quei link mostrano la pagina `404.html` con i pulsanti per tornare al sito.

## Cose da completare

- **Foto**: sono in `assets/foto/`. Per cambiarne una, sostituisci il file tenendo lo stesso nome e le stesse proporzioni (hero 1920×1078, chi-siamo/delivery/eventi 4:3, card-* 3:2, galleria-* 3:4).
- **Menu**: la pagina Menu (`menucompleto/`, in IT/FR/EN) è il menu interattivo con prezzi, ingredienti e allergeni; le foto dei piatti sono in `menu/img/`. Per modificare piatti o prezzi chiedimelo e rigenero le tre pagine.
- **Avviso chiusura natalizia**: dopo il 28 dicembre elimina, nelle tre home (`index.html`, `fr/index.html`, `en/index.html`), il blocco tra `<!-- AVVISO TEMPORANEO` e `<!-- FINE AVVISO -->`.
- **Colori**: si cambiano in cima a `assets/css/style.css`.

## Pubblicazione su GitHub Pages

1. Crea un repository su GitHub (es. `21restaurant`) e carica **il contenuto** di questa cartella (non la cartella stessa), file `CNAME` incluso.
2. Nel repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, cartella `/ (root)`, Save.
3. Sempre in Settings → Pages, in **Custom domain** deve comparire `www.21restaurant.com`.

## DNS su Register.it

Nel pannello di Register.it → Dominio `21restaurant.com` → Gestione DNS:

| Tipo | Nome | Valore |
|---|---|---|
| A | `@` (21restaurant.com) | 185.199.108.153 |
| A | `@` | 185.199.109.153 |
| A | `@` | 185.199.110.153 |
| A | `@` | 185.199.111.153 |
| CNAME | `www` | `TUO-UTENTE.github.io.` |

- Elimina i vecchi record A/CNAME che puntano a Wix.
- **Non toccare i record MX** (`mail.register.it`): servono alla posta info@21restaurant.com.
- La propagazione richiede da pochi minuti a qualche ora. Poi in Settings → Pages attiva **Enforce HTTPS**.

## Disdetta di Wix

Disdici l'abbonamento Wix **solo dopo** che il nuovo sito è online su www.21restaurant.com con HTTPS attivo.
