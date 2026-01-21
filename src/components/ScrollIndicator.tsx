import { useEffect, useState } from "react"

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = document.querySelector('.snap-container')
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize position

    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 h-[60vh] w-1 bg-gray-200 rounded-full z-50">
      <div
        className="w-full bg-gray-700 rounded-full transition-all duration-200"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollIndicator
