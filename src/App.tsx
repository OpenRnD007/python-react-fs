import { withMainLayout } from "./components"
import Shipments from "./features/shipments"

function App() {

  return (
    <Shipments />
  )
}

export default withMainLayout(App)
