import * as React from "react"
import styled from "styled-components"
import Countdown, { CountdownRenderProps } from "react-countdown"

const EIGHT_MINUTES_46_SECONDS = 526000

const zeroPad = (num: number) => ("0" + num).slice(-2)

const renderer = (opts: CountdownRenderProps) =>
  `${zeroPad(opts.minutes)}:${zeroPad(opts.seconds)}`

const ScreenTwo = (props: { nextScreen: () => void }) => {
  return (
    <Container>
      <Image />
      <p
        className="animate__animated animate__fadeIn"
        style={{
          margin: 25,
          width: 200,
          textAlign: "left",
          animationDelay: "5s",
        }}
      >
        <Countdown
          date={Date.now() + EIGHT_MINUTES_46_SECONDS + 5000}
          renderer={renderer}
          onComplete={props.nextScreen}
        />
      </p>
    </Container>
  )
}

export default ScreenTwo

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 30px;
  text-align: center;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  flex-wrap: wrap;
  font-size: 72px;
  font-family: "PT Serif", serif;
`

const Image = styled.img.attrs({
  src: "/georgefloyd.png",
  className: "animate__animated animate__fadeIn",
  alt:
    "Police officer Derek Chauvin kneeling on George Floyd's neck, leading to Floyd's death.",
})`
  border-radius: 7px;
  margin: 20px;
  @media only screen and (max-height: 600px) {
    height: 250px;
  }
`
