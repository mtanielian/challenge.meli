import { render, screen } from "@testing-library/react"
import InfoSale from "../../src/components/productDetail/InfoSale"
import { formatPrice } from "../../src/utils/numbers"

describe('test <InfoSale />', () => {
  test('init show component with params', () => {    
    const props = {
      condition : 'new',
      soldQuantity : 54,
      title : 'figura de acción - Goku',
      currencyId : 'ARS',
      price : 15000
    }

    const price = formatPrice({price:props.price, currency: props.currencyId})

    render(<InfoSale {...props} />)
    expect(screen.getByText(props.title)).toBeTruthy()
    expect(screen.getByLabelText('condition').textContent).toBe(`Nuevo - ${props.soldQuantity} vendidos`)
    expect(screen.getByLabelText('price').textContent).toBe(price)
    expect(screen.getByRole('button', {name: 'Comprar'})).toBeTruthy()
  })
})