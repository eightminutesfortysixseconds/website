import React from "react"
import ScreenThree from "./ScreenThree"
import ScreenOne from "./ScreenOne"
import ScreenTwo from "./ScreenTwo"

const App = () => {
  const [screenIndex, setScreenIndex] = React.useState(0)

  const nextScreen = () => {
    setScreenIndex(screenIndex + 1)
  }

  if (screenIndex === 0) {
    return <ScreenOne nextScreen={nextScreen} />
  }
  if (screenIndex === 1) {
    return <ScreenTwo nextScreen={nextScreen} />
  }
  return <ScreenThree />
}

export default App
