import { mount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'
import store from '@/store/store'

describe('ProductList.vue', () => {
  it('se muestra correctamente la lista de productos', () => {
    const productos = [
      { nombre: 'Producto de prueba 1', precio: 100, categoria: 'Categoría de prueba', id: "1", imagen: 'http://localhost:8080/public/images/product1.jpg' },
      { nombre: 'Producto de prueba 2', precio: 200, categoria: 'Categoría de prueba', id: "2", imagen: 'http://localhost:8080/public/images/product2.jpg' }
    ]

    store.state.productos.productos = productos

    const wrapper = mount(ProductList, {
      props: {},
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toMatch(productos[0].nombre)
    expect(wrapper.text()).toMatch(productos[1].nombre)
  })

  it('se muestra un mensaje de error al fallar la API', () => {

    const mensajeError = 'Error al cargar los productos'
    store.state.productos.cargando = false
    store.state.productos.error = mensajeError

    const wrapper = mount(ProductList, {
      props: {},
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toMatch(mensajeError)
  })
})
