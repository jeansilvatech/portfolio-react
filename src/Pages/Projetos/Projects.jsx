import Header from "../../components/Header/Header";
import * as J from './styles'

import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const WheelControls = (slider) => {
  let touchTimeout
  let position
  let wheelActive

  function dispatch(e, name) {
    position.x -= e.deltaX
    position.y -= e.deltaY
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    )
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    }
    dispatch(e, "ksDragStart")
  }

  function wheel(e) {
    dispatch(e, "ksDrag")
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd")
  }

  function eventWheel(e) {
    e.preventDefault()
    if (!wheelActive) {
      wheelStart(e)
      wheelActive = true
    }
    wheel(e)
    clearTimeout(touchTimeout)
    touchTimeout = setTimeout(() => {
      wheelActive = false
      wheelEnd(e)
    }, 50)
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    })
  })
}
const Projects = ()=>{
    const [sliderRef] = useKeenSlider(
        {
          loop: false,
          rubberband: false,
          vertical: true,
        },
        [WheelControls]
      )
    return(
        <>
        <Header />
        <J.Container>
        <div ref={sliderRef} className="keen-slider" style={{ height: '100%', width: '100%'}}>
            <div className="keen-slider__slide"><J.Image src="https://jeansilvatech.netlify.app/assets/img/copadomundo.png" alt="" /></div>
            <div className="keen-slider__slide"><J.Image src="https://jeansilvatech.netlify.app/assets/img/disneyplus.png" alt="" /></div>
            <div className="keen-slider__slide"><J.Image src="https://jeansilvatech.netlify.app/assets/img/black-panther.png" alt="" /></div>
            <div className="keen-slider__slide"><J.Image src="https://jeansilvatech.netlify.app/assets/img/nlw.png" alt="" /></div>
            <div className="keen-slider__slide"><J.Image src="https://jeansilvatech.netlify.app/assets/img/pokemon.png" alt="" /></div>
            <div className="keen-slider__slide"><J.Image src="https://jeansilvatech.netlify.app/assets/img/instagram.png" alt="" /></div>
        
        </div>
        </J.Container>
        </>
    )
}
export default Projects;