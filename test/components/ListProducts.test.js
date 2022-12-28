import { render,screen } from '@testing-library/react'
import ListProducts from '../../src/components/listProducts/ListProducts'
import { mockProducts } from '../mocks/productjs'
import { ProductContext } from '../../src/context/ProductContext'
import { MemoryRouter } from 'react-router-dom'

describe('test component <ListProducts />', () => {

  test('component without products', () => {
    render(
      <MemoryRouter>
        <ProductContext.Provider value={{}}>
          <ListProducts />
        </ProductContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  test('component with mock products', () => {
    render(
      <MemoryRouter>
        <ProductContext.Provider value={{products: mockProducts.results}}>
          <ListProducts />
        </ProductContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getAllByLabelText('product').length).toBe(mockProducts.results.length)
  })  
})