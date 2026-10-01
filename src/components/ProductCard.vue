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
import { Star, StarFilled } from '@element-plus/icons-vue'

const store = useStore()

</script>

<template>
  <el-card data-cy="product-card" shadow="hover" class="card">
    <img :src="imagen" :alt="nombre" class="imagen" />
    <el-tag type="info" data-cy="product-card-category">{{ categoria }}</el-tag>
    <h3>{{ nombre }}</h3>
    <p class="precio">${{ precio }}</p>
    <el-button v-if="esFavorito" type="danger" plain :icon="StarFilled" @click="store.commit('quitarFavorito', id)">
      Eliminar de favoritos
    </el-button>
    <el-button v-else type="primary"
     :icon="Star" @click="store.commit('agregarFavorito', id)">
      Agregar a favoritos
    </el-button>
  </el-card>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}

/* las fotos vienen con fondo blanco, asi no se nota el espacio que deja object-fit (tambien en modo oscuro) */
.imagen {
  width: 100%;
  height: 220px;
  object-fit: contain;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: transform 0.3s;
}

.card:hover .imagen {
  transform: scale(1.05);
}

h3 {
  margin: 15px 0 5px;
}

.precio {
  font-size: 20px;
  font-weight: bold;
  color: #409eff;
}
</style>