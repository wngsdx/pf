import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

