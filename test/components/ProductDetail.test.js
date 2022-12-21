import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import ProductDetail from "../../src/components/productDetail/ProductDetail";
import { ProductContext } from "../../src/context/ProductContext";
import { formatPrice } from "../../src/utils/numbers";


describe('test component <ProductDetail />', () => {
  test('test without product', () => {      
    render(
      <ProductContext.Provider value={{}} >
        <ProductDetail />
      </ProductContext.Provider>
    )
    expect(screen.getAllByText('Loading...')).toBeTruthy()
  })
})

describe('test component with fake product', () => {
  const productDetailMock = {
    currency_id: 'ARS', 
    price: 354000, 
    title: 'Apple iPhone 13 (128 Gb) - Blanco Estelar', 
    sold_quantity: 5, 
    pictures: [{ url: 'http://http2.mlstatic.com/D_736168-MLA47781742030_102021-O.jpg'}], 
    condition: 'new', 
    plain_text: 'texto de prueba'
  }

  test('init', async () => {      
    render(
      <ProductContext.Provider value={{productDetail: productDetailMock}} >
        <ProductDetail />
      </ProductContext.Provider>
    )
    
    const price = formatPrice(productDetailMock.price, productDetailMock.currency_id)
    expect(screen.getByLabelText('title').textContent).toBe(productDetailMock.title)
    expect(screen.getByText(productDetailMock.plain_text)).toBeTruthy()
    expect(screen.getByRole('img', { name: productDetailMock.title }).src).toBe(productDetailMock.pictures[0].url)
    expect(screen.getByRole('button', { name: 'Comprar' })).toBeTruthy()      
  })
})
