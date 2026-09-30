import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import ProductCard from '@/components/ProductCard.vue'
import { createStore } from 'vuex'

function crearStore(estadoInicial = {}) {
  return createStore({
    modules: {
      favoritos: {
        state: () => ({
          ...estadoInicial
        }),
      }
    }
  })
}

describe('ProductCard.vue', () => {
  it('se muestra correctamente el producto', () => {
    
    const store = crearStore()
    
    const producto = { nombre: 'Producto de prueba', precio: 100,
    categoria: 'Categoría de prueba',
    id: "1",
    imagen: 'http://localhost:8080/public/images/product1.jpg'

    }
    const wrapper = mount(ProductCard, {
      props: producto,
      global: {
        plugins: [store, ElementPlus]
      }
    })
    expect(wrapper.text()).toMatch(producto.nombre)
    expect(wrapper.text()).toMatch(producto.precio.toString())
    expect(wrapper.text()).toMatch(producto.categoria)
  })
})
