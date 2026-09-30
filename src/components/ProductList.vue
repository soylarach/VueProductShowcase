<template>

  <div class="filtro">
    <span>Categoría: </span>
    <!-- lo deje como select normal porque el test de cypress usa .select() -->
    <select @change="alCambiarCategoria" data-cy="category-filter">
      <option value="" data-cy="product-category">Todas las categorías</option>
      <option v-for="categoria in categorias" :key="categoria" :value="categoria" data-cy="product-category">
        {{ categoria }}
      </option>
    </select>
  </div>

  <el-skeleton v-if="cargando" :rows="4" animated />
  <el-alert v-else-if="error" :title="error" type="error" show-icon :closable="false" />
  <el-empty v-else-if="productosFiltrados.length === 0" description="No se encontraron productos" />
  <el-row v-else :gutter="20">
    <el-col v-for="producto in productosFiltrados" :key="producto.id" :xs="24" :sm="12" :md="8" :lg="6">
      <ProductCard
        :id="producto.id"
        :nombre="producto.nombre"
        :precio="producto.precio"
        :imagen="producto.imagen"
        :categoria="producto.categoria"
        :esFavorito="producto.esFavorito"
      />
    </el-col>
  </el-row>
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
.filtro {
  margin-bottom: 20px;
  text-align: left;
}

select {
  padding: 6px 10px;
  min-width: 200px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
}

html.dark select {
  background-color: #1d1e1f;
  border-color: #4c4d4f;
  color: #cfd3dc;
}
</style>
