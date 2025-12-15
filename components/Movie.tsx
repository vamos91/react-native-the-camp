import { useStore } from '@/services/store/counterProvider';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Movie({ movieData }: any) {
  const {counter, increment} = useStore()
  //const [counter, setCounter] = useState(0)

  const handleCounter = () => {
   increment()
  }

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://image.tmdb.org/t/p/w500' + movieData.poster_path }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {movieData.title}
        </Text>
        <Text className='text-white' onPress={() => handleCounter()}>Counter { counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  image: {
    width: '100%',
    height: 225,
    resizeMode: 'cover',
  },
  titleContainer: {
    padding: 8,
    backgroundColor: '#121212',
  },
  title: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
});