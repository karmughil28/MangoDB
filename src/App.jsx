import { useState } from 'react'
import photos from './photos'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'

export default function App() {
  const [active, setActive] = useState(null) // index of open photo, or null

  return (
    <>
      <header className="top">
        <h1>Eight landscapes</h1>
        <p>Click any photo to view it larger.</p>
      </header>

      <Gallery photos={photos} onOpen={setActive} />

      {active !== null && (
        <Lightbox
          photos={photos}
          index={active}
          onChange={setActive}
          onClose={() => setActive(null)}
        />
      )}
    </>
  )
}
