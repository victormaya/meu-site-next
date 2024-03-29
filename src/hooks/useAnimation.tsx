import React from 'react'

const useAnimation = (
  card: React.MutableRefObject<HTMLHeadingElement>,
  scrollOn: boolean
) => {
  React.useEffect(() => {
    if (window.innerWidth > 970) {
      if (
        card.current.getBoundingClientRect().top <=
        (window.innerHeight * 3.1) / 4
      ) {
        card.current.classList.add('visible')
      } else {
        card.current.classList.remove('visible')
      }
    }
  }, [scrollOn, card])
}
export default useAnimation
