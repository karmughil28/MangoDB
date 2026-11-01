import { useEffect } from 'react'

export default function Lightbox({ photos, index, onChange, onClose }) {
  const total = photos.length
  const go = (i) => onChange((i + total) % total)
  const photo = photos[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') go(index - 1)
      if (e.key === 'ArrowRight') go(index + 1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  })

  return (
    <div className="lightbox" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="close" onClick={onClose} aria-label="Close">&times;</button>
      <button className="nav prev" onClick={() => go(index - 1)} aria-label="Previous photo">&#8249;</button>
      <img src={photo.src} alt={photo.alt} />
      <button className="nav next" onClick={() => go(index + 1)} aria-label="Next photo">&#8250;</button>
      <p>{photo.title}</p>
    </div>
  )
}
