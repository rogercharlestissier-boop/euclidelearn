# euclidelearn.fr

Site public d’**Euclide !** (application iPhone de maths collège).

## Contenu

| Fichier | Rôle |
|---------|------|
| `index.html` | Portail (app vs cours à domicile) |
| `accueil.html` | App + TestFlight + diaporama |
| `mondes.html` | Détail CM → 3e |
| `cgu.html` | CGU & confidentialité |

Lien TestFlight (provisoire) : `https://testflight.apple.com/join/ABBWX98b`  
À remplacer par l’URL App Store dans `accueil.html` une fois l’app validée.

## GitHub Pages

1. Repo → **Settings** → **Pages**
2. Source : branche `main`, dossier `/` (root)
3. Le fichier `CNAME` pointe déjà vers `euclidelearn.fr`

URL GitHub le temps du DNS : `https://<compte>.github.io/<repo>/`

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
