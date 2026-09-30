export default {
  state: () => ({
    categoria: ''
  }),
  mutations: {
    setCategoria(state, categoria) { state.categoria = categoria },
    limpiarFiltros(state) { state.categoria = '' }
  }
}