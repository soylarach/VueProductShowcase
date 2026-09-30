<template>
  <div class="header">
    <h2>Vue Product Showcase</h2>
    <div class="acciones">
      <el-tag size="large">
        <el-icon><StarFilled /></el-icon>
        Productos favoritos: {{ totalFavoritos }}
      </el-tag>
      <el-button v-if="modoOscuro" :icon="Sunny" @click="store.commit('activarModoClaro')">
        <span class="texto-tema">Modo claro</span>
      </el-button>
      <el-button v-else
       :icon="Moon" @click="store.commit('activarModoOscuro')">
        <span class="texto-tema">Modo oscuro</span>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { StarFilled, Moon, Sunny } from '@element-plus/icons-vue'

const store = useStore()

const totalFavoritos = computed(() => store.getters.listaFavoritos.length)
const modoOscuro = computed(() => store.state.tema.oscuro)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.acciones {
  display: flex;
  align-items: center;
  gap: 10px;
}

h2 {
  margin: 0;
  color: #409eff;
}

@media (max-width: 600px) {
  h2 {
    font-size: 16px;
  }

  .texto-tema {
    display: none;
  }
}
</style>
