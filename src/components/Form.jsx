import React, { useState } from "react"

const Form = ({ setMesh }) => {
  const [args, setArgs] = useState({
    sX: 3,
    sY: 3,
    sZ: 3,
  })
  const [position, setPosition] = useState({
    pX: 0,
    pY: 0,
    pZ: 0,
  })
  const [color, setColor] = useState("#1D90FF")
  const [speed, setSpeed] = useState(3)

  const handleClick = (e) => {
    e.preventDefault()
    setMesh({
      args: [args.sX, args.sY, args.sZ],
      position: [position.pX, position.pY, position.pZ],
      color: color,
      speed: speed,
    })
  }

  const handleChange = (e) => {
    switch (e.target.name[0]) {
      case "s":
        setArgs({ ...args, [e.target.name]: e.target.value })
      case "p":
        setPosition({ ...position, [e.target.name]: e.target.value })
    }
  }

  return (
    <div className="card bg-transparent">
      <div className="card-body">
        <form className="">
          {/* Size */}
          <div className="row align-items-center">
            <div className="col">
              <p className="mb-0">Size</p>
              <label htmlFor="sX">X: {args.sX}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={args.sX}
                name="sX"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="sY">Y: {args.sY}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={args.sY}
                name="sY"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="sZ">Z: {args.sZ}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={args.sZ}
                name="sZ"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* Position */}
          <div className="row align-items-center">
            <div className="col">
              <p className="mb-0">Position</p>
              <label htmlFor="pX">X: {position.pX}</label>
              <input
                type="range"
                min="-5"
                max="5"
                value={position.pX}
                name="pX"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="pY">Y: {position.pY}</label>
              <input
                type="range"
                min="-5"
                max="5"
                value={position.pY}
                name="pY"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="pZ">Z: {position.pZ}</label>
              <input
                type="range"
                min="-5"
                max="5"
                value={position.pZ}
                name="pZ"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <p className="mb-0">Color</p>
          <input
            className="w-100 mb-3"
            type="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div className="row align-items-center">
            <div className="col">
              <p className="mb-0">Speed</p>
              <label htmlFor="speed">{speed}</label>
              <input
                type="range"
                min="0"
                max="20"
                value={speed}
                name="speed"
                onChange={(e) => setSpeed(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn btn-primary w-100 mt-3"
            onClick={(e) => handleClick(e)}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
