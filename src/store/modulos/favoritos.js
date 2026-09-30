export default {
  state: () => ({
    ids: []
  }),
  getters: {
    esFavorito: (state) => (id) => state.ids.includes(id),
    listaFavoritos(state, getters, rootState) {
      return rootState.productos.productos.filter(p => state.ids.includes(p.id))
    },
  },
  mutations: {
    agregarFavorito(state, id) {
      if (!state.ids.includes(id)) {
        state.ids.push(id)
      }
    },
    quitarFavorito(state, id) {
      const indice = state.ids.indexOf(id)
      if (indice !== -1) {
        state.ids.splice(indice, 1)
      }
    }
  }
}