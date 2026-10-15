SAMA BOUTIQUE — GUIDE DE DÉMARRAGE
=================================

CONTENU
- index.html : structure du site
- style.css  : design responsive pour téléphone et ordinateur
- script.js  : produits, recherche, panier et commande WhatsApp
- logo-sama-boutique.png : logo créé pour Sama Boutique

1. TESTER LE SITE SUR UN ORDINATEUR
- Décompressez le fichier ZIP.
- Ouvrez le dossier sama_boutique.
- Double-cliquez sur index.html pour l'ouvrir dans votre navigateur.

2. CONFIGURER VOTRE NUMÉRO WHATSAPP (OBLIGATOIRE)
- Ouvrez script.js avec Bloc-notes.
- En haut du fichier, trouvez :
  const WHATSAPP_NUMBER = "221762723824"; (déjà configuré dans cette version)
- Remplacez 221XXXXXXXXX par votre numéro au format international, chiffres uniquement.
  Exemple fictif Sénégal : 221771234567
- Enregistrez le fichier.

3. METTRE VOS VRAIS PRODUITS
Dans script.js, remplacez les produits d'exemple dans le tableau `products`.
Chaque produit comporte :
- id : identifiant unique
- name : nom du produit
- category : Ordinateurs, Téléphones, Accessoires ou Électronique
- price : prix en FCFA (nombre, sans espaces)
- icon : emoji d'illustration
- description : courte description

Les illustrations de cette version sont des icônes. Pour afficher vos vraies photos, il faudra ajouter des images de produits et adapter les cartes.

4. PUBLIER LE SITE GRATUITEMENT
Une option est GitHub Pages :
- Créez un compte sur https://github.com/
- Créez un dépôt public, par exemple `sama-boutique`.
- Envoyez index.html, style.css et script.js à la racine du dépôt.
- Dans Settings > Pages, choisissez la publication depuis la branche principale (main) et le dossier racine.
- Attendez la publication et ouvrez l'adresse indiquée par GitHub Pages.
Documentation officielle : https://docs.github.com/en/pages

5. CONFIGURER WHATSAPP BUSINESS
- Installez WhatsApp Business depuis la boutique officielle d'applications de votre téléphone.
- Configurez le nom Sama Boutique, une photo/logo, la description, les horaires et l'adresse ou zone de service.
- Ouvrez Outils professionnels > Catalogue > Ajouter un article.
- Ajoutez une photo réelle, le nom, le prix si disponible, la description et la référence.
- Créez des collections : Ordinateurs, Téléphones, Accessoires, Électronique.
- Partagez le lien du catalogue dans votre statut et à vos clients.

IMPORTANT
- Ce site prépare une commande et l'ouvre dans WhatsApp ; il ne débite aucun paiement.
- Wave et Orange Money doivent être confirmés manuellement avec le vendeur. Ne publiez jamais de code PIN ou code secret.
- Les prix du site sont fictifs : remplacez-les avant toute publication.
- La version fournie n'a pas de base de données, de tableau de bord administrateur ni de suivi de stock automatique.


CONFIGURATION APPLIQUÉE DANS CETTE VERSION
- Numéro WhatsApp configuré : +221 76 272 38 24
- Zone/adresse : non renseignée ; précisez-la dans le site lorsque vous la connaissez.
- Logo Sama Boutique intégré dans l’en-tête et le pied de page.
