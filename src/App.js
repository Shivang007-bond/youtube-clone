import { Provider } from "react-redux";
import Header from "./components/Header";
import appStore from "./Redux/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Body from "./components/Body";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRoute} />
      </Provider>
    </div>
  );
}

export default App;
