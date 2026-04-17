import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Routing 주소 설정 - main.jsx
import { createBrowserRouter, RouterProvider }  from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Work from './pages/Work.jsx'
import Testimonials from './pages/Testimonials.jsx'

import { store } from './app/store.js';
import { Provider } from 'react-redux'

// Router 객체 생성
const router = createBrowserRouter([
  {
      path: "/",
      element: <App />, // Layout 구성 컴포넌트 정의 App.jsx는 미리 생성되어져 있어야 함
      children: [
        {index: true, element:<Home />},
        {path: "/about", element:<About />},
        {path: "/skills", element:<Skills />},
        {path: "/mywork", element:<Work />},
        {path: "/testimonial", element:<Testimonials />}
      ],
    },
  ],
  {
    hydrationData: {
      loaderData: {
        root: "ROOT DATA",
        // No index data provided
      },
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </StrictMode>,
)
