import { UserContextProvider } from "components/UserContext";
import Routes from "./routes";

const App = () => {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App;




