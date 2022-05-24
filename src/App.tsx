
import DetailsComposer from "./components/DetailsComposer"
import MainScreenComposer from "./components/MainScreenComposer"
import { QueryClientProvider } from "react-query"
import { QueryClient } from "react-query"
import { useState } from "react"

function App() {
const [screenShown, setScreenShown] = useState<string>(`main`)
  return (
    <QueryClientProvider client={new QueryClient()}>

      <div className="App bg-[#FAFAFA] min-h-screen  text-[#111517] dark:bg-[#202C37] dark:text-white" >

        {
          screenShown === `main` ?
            <MainScreenComposer setScreenShown={setScreenShown} />:
            <DetailsComposer setScreenShown={setScreenShown} />
        }
      </div>
    </QueryClientProvider>
  )
}

export default App
