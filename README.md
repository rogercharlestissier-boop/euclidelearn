# euclidelearn.fr

Site public d’**Euclide !** (application iPhone de maths collège).

## Contenu

| Fichier | Rôle |
|---------|------|
| `index.html` | Portail (app vs cours à domicile) |
| `accueil.html` | App + App Store + diaporamas |
| `mondes.html` | Détail CM → 3e |
| `cgu.html` | CGU & confidentialité |
| `assistance.html` | Aide / URL d’assistance App Store |

## App Store Connect (tant que le DNS n’est pas prêt)

Base : `https://rogercharlestissier-boop.github.io/euclidelearn/`

| Champ Apple | URL |
|-------------|-----|
| URL marketing | `…/accueil.html` |
| Politique de confidentialité | `https://euclidelearn.fr/cgu.html` |
| URL d’assistance | `…/assistance.html` |

Quand `euclidelearn.fr` répond en HTTPS, remplacer la base par `https://euclidelearn.fr/` (mêmes fichiers).

App Store : `https://apps.apple.com/fr/app/euclide/id6754806580`

## GitHub Pages

1. Repo → **Settings** → **Pages**
2. Source : branche `main`, dossier `/` (root)
3. Le fichier `CNAME` pointe déjà vers `euclidelearn.fr`

Repo prévu : [github.com/rogercharlestissier-boop/euclidelearn](https://github.com/rogercharlestissier-boop/euclidelearn)  
URL GitHub le temps du DNS : `https://rogercharlestissier-boop.github.io/euclidelearn/`

## DNS OVH (domaine euclidelearn.fr)

Chez OVH, zone DNS du domaine :

- Enregistrement **A** (souvent déjà proposé par GitHub Pages) **ou**
- **CNAME** `www` → `<compte>.github.io`
- Pour l’apex `euclidelearn.fr` : suivez l’aide GitHub « Configuring a custom domain » (enregistrements A de GitHub Pages)

Puis dans Pages : Custom domain = `euclidelearn.fr`, activer HTTPS.

## Local

Ouvrir `index.html` dans le navigateur, ou :

```bash
cd website
python3 -m http.server 8080
```
