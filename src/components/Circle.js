import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import '../styles/Circle.scss'
import { a } from '@react-spring/web'
import { useSpring } from '@react-spring/core'
import Scene from './Scene'

export default function App() {
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#909090' }, [])
  return (
    <>
      <a.main style={{ background }}>
        <Canvas className="Circle_canvas" dpr={[1, 2]}>
          <Scene setBg={set} />
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
      </a.main>
    </>
  )
}
