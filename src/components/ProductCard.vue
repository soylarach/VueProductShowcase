<script setup>
defineProps({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  esFavorito: {
    type: Boolean,
    default: false
  }
})

import { useStore } from 'vuex'

const store = useStore()

</script>

<template>
  <article>
    <!-- <img :src="imagen" :alt="nombre" /> -->
    <h3>{{ nombre }}</h3>
    <p>${{ precio }}</p>
    <button v-if="esFavorito" @click="store.commit('quitarFavorito', id)">
      Eliminar de favoritos
    </button>
    <button v-else
     @click="store.commit('agregarFavorito', id)">
      Agregar a favoritos
    </button>
    <p>{{ categoria }}</p>
  </article>
</template>