import { Button } from '@/components/ui/button'
import './global.css'

export function App() {
  return (
    <div className="justify-center bg-slate-100 flex items-center h-screen">
      <div className="flex justify-center items-center w-full max-w-lg h-80 bg-slate-600 rounded-sm">
        <Button>Clique aqui</Button>
      </div>
    </div>
  )
}
