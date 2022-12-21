import { render } from "@testing-library/react"
import SkeletonLoading from "../../src/components/listProducts/SkeletonLoading"

describe('Test <SkeletonLoading />', () => {
  test('show default show 4 skeletons', () => {
    const {container} = render(<SkeletonLoading />)
    expect(container.getElementsByTagName('span').length).toBe(4)
  })

  test('show cant of skeletons passing in argument', () => {
    const cantItems = 10
    const {container} = render(<SkeletonLoading cantItems={cantItems} />)
    expect(container.getElementsByTagName('span').length).toBe(cantItems)
  })

  test('show 1 skeletons if pass string as an argument', () => {
    const cantItems = 'adasdasdasdad'
    const {container} = render(<SkeletonLoading cantItems={cantItems} />)
    expect(container.getElementsByTagName('span').length).toBe(1)
  })
})