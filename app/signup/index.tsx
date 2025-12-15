import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = () => {
       
        if (!email || !password || !confirmPassword) {
            Alert.alert('Erreur', 'Tous les champs sont requis');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
            //response from server ok !
            //redirect to signin page 
           
        } else {
             router.push('/signin')
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
            <Text className="text-white text-2xl font-bold mb-8">Créer un compte</Text>

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

            <TextInput
                placeholder="Confirmer le mot de passe"
                placeholderTextColor="#666"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                className="bg-gray-900 text-white px-4 py-3 rounded mb-8 border border-gray-700"
            />

            <TouchableOpacity
                onPress={handleSignup}
                disabled={loading}
                className="bg-red-600 py-3 rounded items-center mb-4"
            >
                <Text className="text-white font-bold text-lg">
                    {loading ? 'Inscription...' : "S'inscrire"}
                </Text>
            </TouchableOpacity>

            <Text className="text-gray-400 text-center">
                Vous avez déjà un compte?{' '}
                <Text className="text-red-600 font-bold">Se connecter</Text>
            </Text>
        </View>
    );
}