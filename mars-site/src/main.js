import './style.css'

const scrollButtons = document.querySelectorAll('[data-scroll]')

scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.scroll

    if (target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})
