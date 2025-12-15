import Movie from '@/components/Movie'
import { getMovies } from '@/services/api/movies'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function NetflixScreen() {
  

  // useEffect(() => {
  //   const getData = async () => {
  //     const moviesFromDB = await getMovies()
  //     setMovies(moviesFromDB)
  //   }
  //  getData()
  // }, [])

  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  })

  return (
    <SafeAreaView>
      <ScrollView>
        
        {
          data && data.map((movie: any) => (
            <Movie key={movie.id} movieData={movie} />
          ))
          }
      </ScrollView>
    </SafeAreaView>
      
  )
}