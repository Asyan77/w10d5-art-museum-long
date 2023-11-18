import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import harvardArt from "./data/harvardArt"
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";


function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}


function App() {
  
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <h1>Art Museum things</h1>
        }, 
        {
          path: "*",
          element: <h2>this not work</h2>
        },
        {
          path: "galleries/:galleryId",
          element: <GalleryView galleries={harvardArt.records} />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App;
