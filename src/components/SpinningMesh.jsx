import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"

const SpinningMesh = (props) => {
  const { position, args, speed, color } = props
  const mesh = useRef(null)
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += speed / 500
  })
  const [active, setActive] = useState(false)

  const properties = useSpring({
    scale: active ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  return (
    //Animated 'a' mesh
    <a.mesh
      onClick={() => setActive(!active)}
      scale={properties.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxGeometry args={args} />
      <MeshWobbleMaterial color={color} speed={speed} factor={0.3} />
    </a.mesh>
  )
}

export default SpinningMesh
