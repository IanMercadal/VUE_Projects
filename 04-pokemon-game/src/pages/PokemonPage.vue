<template>
  <h1>¿Quién es este Pokémon?</h1>
  
  <PokemonPicture />
  <PokemonOptions />

</template>

<script>
import PokemonOptions from '../components/PokemonOptions'
import PokemonPicture from '../components/PokemonPicture'

export default {
    components: { PokemonOptions, PokemonPicture}
}
</script>