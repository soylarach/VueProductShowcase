export default {
  state: () => ({
    oscuro: false
  }),
  mutations: {
    activarModoOscuro(state) { state.oscuro = true },
    activarModoClaro(state) { state.oscuro = false }
  }
}