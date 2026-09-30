<template>

  <select @change="alCambiarCategoria" data-cy="category-filter">
    <option value="" data-cy="product-category">Todas las categorías</option>
    <option v-for="categoria in categorias" :key="categoria" :value="categoria" data-cy="product-category">
      {{ categoria }}
    </option>
  </select>

  <p v-if="cargando">Cargando productos...</p>
  <p v-else-if="error">{{ error }}</p>
  <p v-else-if="productosFiltrados.length === 0">No se encontraron productos</p>
  <ul v-else>
    <ProductCard
      v-for="producto in productosFiltrados"
      :key="producto.id"
      :id="producto.id"
      :nombre="producto.nombre"
      :precio="producto.precio"
      :imagen="producto.imagen"
      :categoria="producto.categoria"
      :esFavorito="producto.esFavorito"
    />
  </ul>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const productosFiltrados = computed(() => store.getters.productosFiltrados)
const cargando = computed(() => store.state.productos.cargando)
const error = computed(() => store.state.productos.error)
const categorias = computed(() => store.getters.categorias)

onMounted(() => store.dispatch('cargarProductos'))

async function alCambiarCategoria(event) {
  const categoriaSeleccionada = event.target.value
  store.commit('setCategoria', categoriaSeleccionada)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
