const adviceTitle = document.querySelector('.advice-h1')
const adviceText = document.querySelector('.advice-p')
const btn = document.querySelector('.generate-btn')

btn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
    .then(data => {
        console.log(data)
        adviceTitle.textContent = `ADVICE #${data.slip.id}`
        adviceText.textContent = `"${data.slip.advice}"`
    })
})