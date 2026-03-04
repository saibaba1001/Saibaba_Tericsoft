import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header.tsx'
import CharacterCard from './components/CharacterCard.tsx'
import LoadingState from './components/LoadingState.tsx'
import ErrorState from './components/ErrorState.tsx'
import { fetchCharacters } from './api/characterService.ts'
import type { Character } from './api/characterService.ts'

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchCharacters()
      setCharacters(data.results)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <Header />

      <main>
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} onRetry={loadData} />
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {characters.map((char, index) => (
              <CharacterCard key={char.id} character={char} index={index} />
            ))}
          </div>
        )}
      </main>

      <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <p>Built with React + Vite + Framer Motion</p>
      </footer>
    </div>
  )
}

export default App
