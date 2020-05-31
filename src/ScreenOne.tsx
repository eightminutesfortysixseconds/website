import * as React from "react"
import styled from "styled-components"

const ScreenOne = (props: { nextScreen: () => void }) => {
  React.useEffect(() => {
    setTimeout(() => props.nextScreen(), 12000)
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <p>
        <span
          className="animate__animated animate__fadeIn"
          style={{ animationDuration: "3s", animationDelay: "0.7s" }}
        >
          Eight minutes
        </span>
        <span
          className="animate__animated animate__fadeIn"
          style={{ animationDuration: "3s", animationDelay: "3.6s" }}
        >
          , forty-six seconds.
        </span>
      </p>
      <p
        className="animate__animated animate__fadeIn"
        style={{
          animationDuration: "2s",
          animationDelay: "4.9s",
          fontSize: 22,
        }}
      >
        Content warning: this site contains a graphic image of police violence.
      </p>
    </Container>
  )
}

export default ScreenOne

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
  flex-direction: column;
  font-weight: bold;
  font-size: 42px;
  font-family: "PT Serif", serif;
`
