# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

### 🕐 Durée

**1 journée (7 heures)**

> Public : développeurs ayant déjà des bases solides en React et React Native (hooks, composants, JSX, navigation de base)

---

## 🧭 Objectifs pédagogiques

À la fin de la journée, le participant sera capable de :

- Mettre en place une navigation avancée (top/bottom tab navigators)
- Gérer la géolocalisation utilisateur avec les permissions
- Utiliser le stockage local (AsyncStorage)
- Gérer l’état global avec **Zustand**
- Styliser avec StyleSheet et **NativeWind**
- Réaliser des requêtes HTTP avancées avec **TanStack Query**
- Gérer le cycle de vie des composants et les événements
- Combiner ces notions dans une application complète Expo

---

## 🗓️ Programme de la journée

![home.png](attachment:3e3db457-3a6b-4e46-b0a3-cf6031d4acc6:home.png)

![weather.png](attachment:6ac934da-e6ab-4b6d-b643-d8d587146f18:weather.png)

![net.png](attachment:8722d189-0264-4fe8-b75f-6fa27837d92b:net.png)

![geo.png](attachment:40ede0d2-5da9-4bcf-b5c0-aacf544b31df:geo.png)

### **1. Introduction & setup (30 min)**

- Installation de l’environnement Expo
- Structure du projet et best practices
- Package Visual studio code

📦 Commandes :

```bash
npx create-expo-app formation-react-native
cd formation-react-native
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/material-top-tabs react-native-paper react-native-safe-area-context react-native-screens
npm install @tanstack/react-query
npm install zustand
npm install nativewind
npm install @react-native-async-storage/async-storage
```

---

**Rappel rapide des hooks essentiels (1h):**

- Le CSS avec StyleSheet
- Les composants
- useState et événements
- useEffect et cycle de vie

### Exemple : Cycle de vie d’un composant

```jsx
import { useEffect } from "react";
import { Text, View, Button } from "react-native";

export default function Counter() {
  const [count, setCount] = useState < number > 0;

  useEffect(() => {
    console.log("Monté");
    return () => console.log("Démonté");
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{count}</Text>
      <Button title="Incrémenter" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

## Installation de Nativewind ⇒ https://www.nativewind.dev/

tailwind.config.js

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,tsx,ts,jsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### **2. Navigation avancée (Expo-router) (1h)**

### Concepts :

- Basic navigation
  - Link
  - useRouter
  - useLocalSearchParams
  - Redirect
- Navigation avancée
  - Layout
  - Tabs

### Exemple :

```jsx
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="netflix/index"
        options={{
          title: "Netflix",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="movie" color="#dc2626" />
          ),
        }}
      />
      <Tabs.Screen
        name="weather/index"
        options={{
          title: "Weather",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-lightning"
              size={24}
              color="blue"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="geoloc/index"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="map-location-dot" size={24} color="green" />
          ),
        }}
      />
      <Tabs.Screen name="my-list/index" options={{ href: null }} />
      <Tabs.Screen name="netflix/[id]/index" options={{ href: null }} />
    </Tabs>
  );
}
```

---

### **3. Géolocalisation & gestion des permissions (1h)**

### Concepts :

- Utilisation d’`expo-location`
- Demande de permissions
- Affichage de la position en temps réel

### Exemple :

```jsx
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { Text, View } from "react-native";

export default function GeoScreen() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>
        {location ? JSON.stringify(location.coords) : "Chargement..."}
      </Text>
    </View>
  );
}
```

---

### **4. Stockage local (AsyncStorage) & état global (Zustand) (1h30)**

### Exemple Zustand :

```jsx
import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}
```

### Exemple AsyncStorage :

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveData(key, value) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

async function loadData(key) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
```

---

## Exemple AsyncStorage avec Zustand

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      wishlist: [],
      addToWishlist: (myMovie: any) =>
        set((state: any) => {
          return { wishlist: [...state.wishlist, myMovie] };
        }),
      removeFromWishlist: (myMovie: any) =>
        set((state: any) => ({
          wishlist: state.wishlist.filter(
            (item: any) => item.id !== myMovie.id
          ),
        })),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

### **5. Requêtes HTTP avancées avec TanStack Query (1h30)**

### Concepts :

- `useQuery` pour le fetch
- Gestion du cache et du rechargement
- Gestion des erreurs et du chargement

### Exemple :

```jsx
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { Text, View } from "react-native";

const client = new QueryClient();

function FetchUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
  });

  if (isLoading) return <Text>Chargement...</Text>;
  if (error) return <Text>Erreur : {error.message}</Text>;

  return (
    <View>
      {data.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <FetchUsers />
    </QueryClientProvider>
  );
}
```

---

---

## 🧩 Exercices pratiques

### **Exercice 1 : Navigation combinée**

Créer une application avec :

- un bottom tab
- un top tab à l’intérieur d’un des écrans
  → Objectif : comprendre la hiérarchie de navigation.

---

### **Exercice 2 : Géolocalisation et affichage sur une carte**

1. Afficher la position en temps réel de l’utilisateur sur une carte (via `react-native-maps`).
2. Un bouton “toggle” permettra de switcher les mode d’affichage de la map.
3. A partir du JSON suivant, afficher les marker sur la map.
4. Une pression sur l’écran permettra d’ajouter un marker au notre JSON (base de données fictive).

```jsx
const markers = [
  {
    title: "Tour Eiffel",
    description:
      "Symbole emblématique de Paris, construite pour l’Exposition universelle de 1889.",
    latitude: 48.85837,
    longitude: 2.294481,
  },
  {
    title: "Mont Saint-Michel",
    description:
      "Îlot rocheux et abbaye médiévale célèbre, situé en Normandie.",
    latitude: 48.636063,
    longitude: -1.511457,
  },
  {
    title: "Château de Versailles",
    description:
      "Ancienne résidence royale connue pour ses jardins et sa galerie des glaces.",
    latitude: 48.804865,
    longitude: 2.120355,
  },
  {
    title: "Cathédrale Notre-Dame de Paris",
    description:
      "Chef-d’œuvre de l’architecture gothique situé sur l’île de la Cité.",
    latitude: 48.852968,
    longitude: 2.349902,
  },
  {
    title: "Pont du Gard",
    description:
      "Aqueduc romain parfaitement conservé, classé au patrimoine mondial de l’UNESCO.",
    latitude: 43.9475,
    longitude: 4.535,
  },
];
```

---

### **Exercice 3 : Gestion de profil avec Zustand et AsyncStorage**

Créer un petit écran “Signin” où l’utilisateur saisit son email et password, stocké dans Zustand et persisté via AsyncStorage.

Un écran “profil” affichera l’email depuis le store.

---

### **Exercice 4 : Requête HTTP avec TanStack Query**

Créer un écran qui liste des utilisateurs depuis une API externe (ex: JSONPlaceholder).

→ Ajouter un bouton “Rafraîchir” pour recharger les données.

---

### **Exercice 5 : Application finale intégrée**

Assembler tous les éléments :

- Navigation complète
- État global
- Stockage local
- Géolocalisation
- Données distantes avec TanStack Query

→ L’application finale affiche un tableau de bord utilisateur géolocalisé avec ses infos et la liste de données distantes.

---

## 🏁 Conclusion

À la fin de la journée, les apprenants auront construit une **application complète et modulaire**, exploitant les principales briques d’un projet React Native professionnel avec Expo.

[Mise en production](https://www.notion.so/Mise-en-production-2ca985e992b7809fab28c3aa60f1a913?pvs=21)
