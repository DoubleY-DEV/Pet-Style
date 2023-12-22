window.onload = () => {
    const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
        //console.log(entry.target.dataset.src)
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
    }
})
}, { threshold: 0.5 })
    document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img))
}

window.onload = () => {
    const observerBg = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
        console.log(entry.target.dataset.bg)
        entry.target.style.backgroundImage = "url('"+entry.target.dataset.bg+"')"
        observer.unobserve(entry.target)
    }
})
}, { threshold: 0.5 })
    document.querySelectorAll('[data-bg]').forEach(el => observerBg.observe(el))
}