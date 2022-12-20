export const formatPrice = ({ price, currency }) => {
  if (!price) return null
  return new Intl.NumberFormat('es-AR', { currency, style: 'currency' }).format(price)
}