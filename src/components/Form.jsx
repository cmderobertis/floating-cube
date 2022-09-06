import React, { useState } from "react"

const Form = ({ mesh, setMesh, dispatch }) => {
  const handleClick = (e) => {
    e.preventDefault()
    dispatch({
      args: [mesh.aX, mesh.aY, mesh.aZ],
      position: [mesh.pX, mesh.pY, mesh.pZ],
      color: mesh.color,
      speed: mesh.speed,
    })
    setMesh({
      aX: 3,
      aY: 3,
      aZ: 3,
      pX: 0,
      pY: 0,
      pZ: 0,
      color: "#1D90FF",
      speed: 3,
    })
  }

  const handleChange = (e) => {
    setMesh({
      ...mesh,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="card bg-transparent">
      <div className="card-body">
        <form className="">
          {/* Size */}
          <div className="row align-items-center">
            <div className="col">
              <p className="mb-0">Size</p>
              <label htmlFor="aX">X: {mesh.aX}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={mesh.aX}
                name="aX"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="aY">Y: {mesh.aY}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={mesh.aY}
                name="aY"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="aZ">Z: {mesh.aZ}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={mesh.aZ}
                name="aZ"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* Position */}
          <div className="row align-items-center">
            <div className="col">
              <p className="mb-0">Position</p>
              <label htmlFor="pX">X: {mesh.pX}</label>
              <input
                type="range"
                min="-5"
                max="5"
                value={mesh.pX}
                name="pX"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="pY">Y: {mesh.pY}</label>
              <input
                type="range"
                min="-5"
                max="5"
                value={mesh.pY}
                name="pY"
                id=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <label htmlFor="pZ">Z: {mesh.pZ}</label>
              <input
                type="range"
                min="-5"
                max="5"
                value={mesh.pZ}
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
            value={mesh.color}
            onChange={(e) => handleChange(e)}
          />
          <div className="row align-items-center">
            <div className="col">
              <p className="mb-0">Speed</p>
              <label htmlFor="speed">{mesh.speed}</label>
              <input
                type="range"
                min="0"
                max="20"
                value={mesh.speed}
                name="speed"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <button
            className="btn btn-primary w-100 mt-3"
            onClick={(e) => handleClick(e)}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
