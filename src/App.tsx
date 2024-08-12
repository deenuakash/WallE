import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";

function App() {
  return (
    //
    <div className="min-h-screen flex flex-col font-regular text-white bg-gray-950">
      <Header />
      <main className="flex-1 p-4">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>

      {/* <footer className="bg-gray-950 text-white p-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 My App. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
