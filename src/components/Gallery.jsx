export default function Gallery({ photos, onOpen }) {
  return (
    <main className="gallery">
      {photos.map((p, i) => (
        <figure
          key={p.title}
          className={p.shape}
          tabIndex={0}
          onClick={() => onOpen(i)}
          onKeyDown={(e) => e.key === 'Enter' && onOpen(i)}
        >
          <img src={p.src} alt={p.alt} loading="lazy" />
          <figcaption>{p.title}</figcaption>
        </figure>
      ))}
    </main>
  )
}
