const discount = 0.15
const getDomNodesBySelector = (selector) => {
    // Ваш код
    const select = document.querySelectorAll(selector)
    return [...select]
}

const price = getDomNodesBySelector('.price-value').map (el => {
    return el.textContent
})


const applyDiscount = (discount) => price.map(el => {
    return el - (el * discount)
})

const sum = applyDiscount(discount).reduce((el, acc) => el+=acc)

const apply = document.querySelector('.total__button')
const priceSum = document.querySelector('.total-price-value')

apply.addEventListener('click', () => {
    getDomNodesBySelector('.price-value').forEach((el, key) => {
        el.innerHTML =  applyDiscount(discount)[key]
    })
    priceSum.innerHTML = sum
})
