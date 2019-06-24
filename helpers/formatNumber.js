const formatNumber = number => {
  if (typeof number === 'number' && !isNaN(number)) {
    return new Intl.NumberFormat().format(number)
  }
}

export default formatNumber
