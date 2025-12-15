import { Redirect } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignin = () => {
        if (!email || !password) {
            Alert.alert('Erreur', 'Tous les champs sont requis');
            //response from server ok !
            //redirect to root '/'
            return <Redirect href='/'/>
        }

        setLoading(true);
        // Votre logique d'inscription ici
        setTimeout(() => {
            Alert.alert('Succès', 'Inscription réussie');
            setLoading(false);
        }, 2000);
    };

    return (
        <View className="flex-1 bg-black justify-center px-6">
            <Text className="text-red-600 text-4xl font-bold mb-2">Netflix</Text>
            <Text className="text-white text-2xl font-bold mb-8">Connectez vous</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                className="bg-gray-900 text-white px-4 py-3 rounded mb-4 border border-gray-700"
                keyboardType="email-address"
            />

            <TextInput
                placeholder="Mot de passe"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="bg-gray-900 text-white px-4 py-3 rounded mb-4 border border-gray-700"
            />
            <TouchableOpacity
                onPress={handleSignin}
                disabled={loading}
                className="bg-red-600 py-3 rounded items-center mb-4"
            >
                <Text className="text-white font-bold text-lg">
                    {loading ? 'Inscription...' : "S'inscrire"}
                </Text>
            </TouchableOpacity>

            <Text className="text-gray-400 text-center">
                Pas encore  ?{' '}
                <Text className="text-red-600 font-bold">Se connecter</Text>
            </Text>
        </View>
    );
}