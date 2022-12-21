import { fireEvent, render, screen } from "@testing-library/react"
import Image from "../../src/components/listProducts/Image"

describe('Testing <Image />', () => {
  const thumbnail = "http://http2.mlstatic.com/D_873253-MLA47782477965_102021-I.jpg"
  const title = "Iphone 13"
  const handleClickDetail = jest.fn()
  
  test('Dont show image if the component dont recibe params', () => {
    const {container} = render(<Image />)
    expect(container.getElementsByTagName('img').length).toBe(0)
  })

  test('Show correct image with params', () => {
    render(<Image thumbnail={thumbnail} title={title} />)
    expect(screen.getByRole('img', {name: title})).toBeTruthy()
  })


  test('Show fireevent click in image with params', () => {
    render(<Image thumbnail={thumbnail} title={title} handleClickDetail={handleClickDetail} />)

    fireEvent.click(screen.getByRole('img', {name: title}))
    expect(handleClickDetail).toBeCalled()
  })

})