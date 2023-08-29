
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('animate-on-scroll', {
        mounted(el){
            const animateOnScrollObserver = new IntersectionObserver(
                (entries, animateOnScrollObserver) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('enter')
                      animateOnScrollObserver.observe(entry.target)
                    }
                  })
                }
              )
               el.classList.add('before-enter')
                animateOnScrollObserver.observe(el)
               },
      // getSSRProps (binding, vnode) {
      //   // you can provide SSR-specific props here
      //   return {}
      // }
    })
  })
  