import MainContent from "./MainContent";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";
import Layout from "./Layout";
import ErrorBoundary from "./ErrorBoundary";

const routesFromElements = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route index path="/" element={<MainContent />} />
      <Route
        path="/about"
        element={<About />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  </>
);

const router = createBrowserRouter(routesFromElements);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
