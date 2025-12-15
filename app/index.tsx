import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  const router = useRouter()
  const features = [
    {
      id: 1,
      title: 'Netflix',
      description: 'Vos films et séries préférés',
      icon: '🎬',
    },
    {
      id: 2,
      title: 'Météo',
      description: 'La météo en temps réel',
      icon: '⛅',
    },
    {
      id: 3,
      title: 'Géolocalisation',
      description: 'Découvrez votre position',
      icon: '📍',
      path: '/(exos)/polyline'
    },
  ];

  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="px-6 py-12">
          <Text className="text-5xl font-bold text-white mb-2">
            The Camp
          </Text>
          <Text className="text-xl text-gray-400 mb-8">
            Découvrez nos services
          </Text>

          {/* Features Grid */}
          <View className="gap-4 mb-8">
            {features.map((feature) => (
              <TouchableOpacity
                onPress={() => router.push('/(exos)/polyline')}
                key={feature.id}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 active:border-red-600"
              >
                <Text className="text-4xl mb-2">{feature.icon}</Text>
                <Text className="text-xl font-bold text-white mb-1">
                  {feature.title}
                </Text>
                <Text className="text-gray-400">{feature.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* CTA Button */}
      <View className="px-6 pb-8">
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/netflix')} className="bg-red-600 rounded-lg py-4 active:bg-red-700">
          <Text className="text-white text-center font-bold text-lg">
            Commencez maintenant
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}