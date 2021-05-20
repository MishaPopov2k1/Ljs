const smothScroll = document.querySelectorAll('a[href^="#"]:not(a[href = "#"])')
smothScroll.forEach(link => {
    link.addEventListener('click', (event) => {

        event.preventDefault()
        const id = link.getAttribute('href').substring(1)
        //console.log(id)
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
            
        });
    })
})