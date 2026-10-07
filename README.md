# 🎬 MyYouTube

MyYouTube est une application web développée avec Angular permettant de rechercher des vidéos YouTube, de les visionner et de gérer une playlist personnelle.

Ce projet met en pratique plusieurs concepts importants d'Angular : composants standalone, services, routing, guards, gestion d'état avec les signals, appels HTTP et tests unitaires.

## ✨ Fonctionnalités

- 🔎 Recherche de vidéos via l'API YouTube Data API v3
- ▶️ Lecture des vidéos dans l'application
- ❤️ Ajout de vidéos à une playlist
- 🗑️ Suppression d'une vidéo de la playlist
- 🧹 Possibilité de vider toute la playlist
- 👤 Inscription et connexion utilisateur
- 🔐 Protection de la page playlist avec un Auth Guard
- 💾 Sauvegarde locale de l'utilisateur et de sa playlist
- 📱 Interface responsive

## 🛠️ Technologies utilisées

- Angular
- TypeScript
- HTML
- SCSS
- Angular Router
- Angular Signals
- HttpClient
- YouTube Data API v3
- LocalStorage
- Vitest

## 📁 Organisation du projet

```text
src/app/
├── core/
│   ├── guards/
│   └── services/
├── features/
│   ├── auth/
│   ├── player/
│   ├── playlists/
│   └── search/
├── layout/
│   ├── header/
│   ├── shell/
│   └── sidebar/
└── shared/
    └── models/
```

## 🚀 Installation

Cloner le projet puis installer les dépendances :

```bash
npm install
```

## 🔑 Configuration de l'API YouTube

L'application utilise **YouTube Data API v3**.

Créer le fichier :

```text
src/environments/environment.ts
```

Puis ajouter :

```ts
export const environment = {
  production: false,
  youtubeApiKey: 'VOTRE_CLE_API'
};
```

Le fichier `environment.ts` contenant la clé API est ignoré par Git et ne doit pas être publié dans le dépôt.

Il est recommandé de restreindre la clé API depuis Google Cloud aux API et origines nécessaires.

## ▶️ Lancer l'application

```bash
npm start
```

Puis ouvrir :

```text
http://localhost:4200
```

## 🧪 Tests

Pour lancer les tests unitaires :

```bash
npm test
```

## 📦 Build

Pour générer une version de production :

```bash
npm run build
```

Les fichiers générés sont placés dans le dossier `dist/`.

## 🔐 Authentification

L'authentification de cette version est une authentification locale de démonstration basée sur `localStorage`.

Elle permet notamment de tester :

- l'inscription ;
- la connexion ;
- la déconnexion ;
- la protection de certaines routes ;
- la gestion d'une playlist associée à l'utilisateur.

> Cette solution est adaptée à une démonstration front-end mais ne constitue pas une authentification sécurisée pour une application en production.

## 🎯 Objectifs du projet

Ce projet a notamment permis de travailler :

- l'architecture d'une application Angular ;
- la création de composants standalone ;
- les services et l'injection de dépendances ;
- Angular Router ;
- les guards ;
- les signals ;
- les appels à une API REST externe ;
- la persistance locale des données ;
- les tests unitaires ;
- la création d'une interface responsive.

## 👩‍💻 Auteure

**Meriem Boufnina**

Projet réalisé dans le cadre de mon parcours en développement d'applications.
