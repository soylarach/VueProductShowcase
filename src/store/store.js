import { createStore } from 'vuex'
import productos from './modulos/productos'
import filtros from './modulos/filtros'
import favoritos from './modulos/favoritos'

export default createStore({
  modules: { productos, filtros, favoritos }
})