import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            }
        })
    }

    let observer

    onMounted(() => {
        observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })

        const animatedElements = document.querySelectorAll('.animate-on-scroll')
        animatedElements.forEach(el => observer.observe(el))
    })

    onUnmounted(() => {
        if (observer) observer.disconnect()
    })

    const observeElements = () => {
        if (!observer) return
        const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)')
        animatedElements.forEach(el => observer.observe(el))
    }

    return {
        observeElements
    }
}
