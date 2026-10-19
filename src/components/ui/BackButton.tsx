import { useNavigate } from 'react-router'
import { Button } from './Button'

/** One step back in the browser history. Shared: it does not know which page it is on. */
export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button variant="ghost" onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>
      ← Back
    </Button>
  )
}
