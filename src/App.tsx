
import DetailsComposer from "./components/DetailsComposer"
import MainScreenComposer from "./components/MainScreenComposer"
import { QueryClientProvider } from "react-query"
import { QueryClient } from "react-query"
import { useState } from "react"

function App() {
  const [screenShown, setScreenShown] = useState<string>(`main`)
  const [mode, setMode] = useState(true)
 
  const lightCss = "App bg-[#FAFAFA] min-h-screen  text-[#111517] dark:bg-[#202C37] dark:text-white"
 
  return (
    <QueryClientProvider client={new QueryClient()}>

      <div className={mode? ``: `dark`}>
        <div className={lightCss} >

          {
            screenShown === `main` ?
              <MainScreenComposer setScreenShown={setScreenShown} setMode={setMode} mode={mode} /> :
              <DetailsComposer setScreenShown={setScreenShown} setMode={setMode} mode={mode} />
          }
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
