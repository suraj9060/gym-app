import React from 'react'
import { Box } from '@mui/system'
import HeroBannner from '../components/HeroBannner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBannner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home