# TODO

## Étape 1 — Typos luxe / magazine
- [x] Mettre à jour `src/index.css` : import polices premium, tokens `--font-serif`/`--font-body`.
- [x] Ajuster tailles/leading/letter-spacing sur titres (h1/h2/h3).
- [ ] Harmoniser `ProjectsList` et `ProjectDetail` (hierarchie titres + labels).

## Étape 2 — Projets sans “card UI”
- [x] Modifier `src/pages/ProjectsList.tsx` : supprimer overlays/bordures/rounded/padding UI, rendu galerie.
- [ ] Retirer définitivement “UI container” dans `src/components/CategorySections.tsx` (cards/rounded/border/bg-card) pour la section principale.
- [x] Ajuster `src/pages/ProjectDetail.tsx` : supprimer `border/rounded/padding` des liens prev/next.

## Étape 3 — Espacements éditoriaux
- [ ] Augmenter gaps/marges sur layouts projets (gaps + whitespace).

## Étape 4 — Nettoyage
- [ ] Passer une recherche pour vérifier que plus aucun `bg-card`, `rounded-*`, `border-border/..` n’entoure les médias des projets.

## Étape 5 — Test
- [ ] Lancer `npm run dev` et vérifier sur desktop/mobile.

