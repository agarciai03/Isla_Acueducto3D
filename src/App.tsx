import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Acueducto } from './components/Islacueducto' // El componente generado por gltfjsx
import { Suspense } from 'react'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className='h-dvh relative w-full overflow-hidden bg-black text-white'>

      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold tracking-wider">IES Albarregas</h1>
        <nav className="flex gap-4">
          <Button variant="ghost">Proyectos</Button>
          <Button variant="ghost">Contactos</Button>
        </nav>
      </header>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-extrabold opacity-80 tracking-widest drop-shadow-2xl">
          MODELO 3D
        </h2>
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}> 
          <Environment
            files="/rogland_clear_night_4k.exr"
            background 
          />
          <OrbitControls
            enableZoom={false} 
            makeDefault
            autoRotate
            autoRotateSpeed={1}
          />

          <Acueducto />
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>

      <footer className="absolute bottom-4 w-full text-center z-10 text-sm opacity-60 pointer-events-none">
        @2026. Todos los derechos reservados
      </footer>

    </div>
  )
}

export default App