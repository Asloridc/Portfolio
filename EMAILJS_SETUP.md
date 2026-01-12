# Configuration du formulaire de contact avec EmailJS

Ce projet utilise EmailJS pour envoyer des emails directement depuis le site web.

## Configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (200 emails/mois)

### 2. Configurer votre service email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID** (exemple: `service_abc123`)

### 3. Créer un template d'email

1. Dans le dashboard, allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez votre template avec ces variables :
   - `{{name}}` - Nom de l'expéditeur
   - `{{email}}` - Email de l'expéditeur
   - `{{message}}` - Message

**Exemple de template :**
```
Subject: Nouveau message de {{name}} depuis votre portfolio

De: {{name}} ({{email}})

Message:
{{message}}

---
Ce message a été envoyé depuis votre formulaire de contact.
```

4. Sauvegardez et notez le **Template ID** (exemple: `template_xyz789`)

### 4. Obtenir votre clé publique

1. Dans le dashboard, allez dans **Account** > **General**
2. Trouvez votre **Public Key** (exemple: `aBcDeFgHiJkLmNo`)

### 5. Configurer le projet

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez les valeurs par vos propres identifiants :

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNo
```

### 6. Tester en local

```bash
npm run dev
```

Remplissez le formulaire de contact et vérifiez que vous recevez bien l'email !

## Déploiement en production

Sur votre plateforme de déploiement (Netlify, Vercel, etc.), ajoutez les variables d'environnement :

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Sécurité

- Le fichier `.env.local` est ignoré par Git (ne sera pas commité)
- Les clés publiques EmailJS peuvent être exposées côté client (c'est normal)
- EmailJS protège contre les abus avec des limites de taux

## Support

Pour plus d'informations : [Documentation EmailJS](https://www.emailjs.com/docs/)
