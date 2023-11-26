// import Button from '@mui/material/Button';
import { Routes, Route } from 'react-router-dom';
import { authProtectedRoutes } from './routes';

function App() {
  return (
    <>
      <div className='row'>
        <div className='main-content d-flex'>
          <div className='col-md-1 col-sm-0 sidebar-menu mobile-sidebar'>
          </div>
          <div className='col-md-11 col-sm-12 mobile-contains'>
            <Routes>
              {authProtectedRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  element={route.component}
                  key={idx}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App