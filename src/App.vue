<template>
  <el-container>
    <el-header>
      <PageHeader />
    </el-header>
    <el-main class="contenido">
      <ProductList/>
    </el-main>
    <el-footer>
      <PageFooter />
    </el-footer>
  </el-container>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue'
import ProductList from './components/ProductList.vue'
import PageFooter from './components/PageFooter.vue'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const modoOscuro = computed(() => store.state.tema.oscuro)

// element plus usa la clase "dark" en el html para su tema oscuro
watch(modoOscuro, (valor) => {
  if (valor) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style>
body {
  margin: 0;
  background-color: #f5f7fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  background-color: white;
  border-bottom: 1px solid #dcdfe6;
}

.contenido {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

/* modo oscuro */
html.dark body {
  background-color: #141414;
}

html.dark #app {
  color: #e5eaf3;
}

html.dark .el-header {
  background-color: #1d1e1f;
  border-bottom: 1px solid #363637;
}
</style>
