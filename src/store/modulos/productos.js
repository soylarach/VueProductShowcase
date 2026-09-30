import axios from 'axios'

export default {
  state: { productos: [],  cargando: false, error: null },
  getters: {
    productosFiltrados(state, getters, rootState) {
      state.productos.forEach(producto => {
        producto.esFavorito = rootState.favoritos.ids.includes(producto.id)
      })

      const categoria = rootState.filtros.categoria
      if (!categoria) return state.productos
      return state.productos.filter(p => p.categoria === categoria)
     },
     categorias: (state) => [...new Set(state.productos.map(p => p.categoria))]
  },
  mutations: {
    setProductos(state, productos) { state.productos = productos },
    setCargando(state, valor) { state.cargando = valor },
    setError(state, mensaje) { state.error = mensaje },
  },
  actions: {
    async cargarProductos({ commit }) {
      commit('setCargando', true)
      commit('setError', null)
      try {
        const respuesta = await axios.get('http://localhost:3000/products')
        commit('setProductos', respuesta.data)
      } catch (e) {
        commit('setError', 'Error al cargar los productos')
      } finally {
        commit('setCargando', false)
      }
    }
  }
}