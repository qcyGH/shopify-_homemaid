window.addEventListener("load", () => {
  const iconFavorite = document.querySelectorAll('.favorite__button')

  iconFavorite.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.parentNode.parentNode.onclick = () => { return false }
    })

    item.addEventListener('mouseleave', () => {
      item.parentNode.parentNode.onclick = () => { return true }
    })

    item.addEventListener('click', (event) => {
      item.classList.toggle('active')
    })
  })
});
