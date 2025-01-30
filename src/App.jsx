import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import LayoutWithNav from './layouts/LayoutWithNav';
import LayoutWithoutNav from './layouts/LayoutWithoutNav';

import LoginPage from './pages/LoginPage';
import BattlePage from './pages/BattlePage/BattlePage';
import PokemonSelectionPage from './pages/PokemonSelectionPage/PokemonSelectionPage';

import { PokemonSelectionProvider } from './context/PokemonSelectionContext';
import SettingsPage from './pages/SettingsPage/SettingsPage';

import { SettingsProvider } from './context/SettingsContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pokemon-selection" />} />

          <Route element={<LayoutWithoutNav />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route
            element={
              <ProtectedRoute>
                <LayoutWithoutNav />
              </ProtectedRoute>
            }
          >
            <Route path="/battle" element=
              {<SettingsProvider>
                <BattlePage />
              </SettingsProvider>
              } />
          </Route>

          <Route
            element={
              <ProtectedRoute>
                <SettingsProvider>
                  <LayoutWithNav />
                </SettingsProvider>
              </ProtectedRoute>
            }
          >
            {/* Pokemon Selection */}
            <Route
              path="/pokemon-selection"
              element={
                <PokemonSelectionProvider>
                  <PokemonSelectionPage />
                </PokemonSelectionProvider>
              }
            />

            {/* Settings */}
            <Route
              path="/settings"
              element={
                <SettingsPage />
              }
            />
          </Route>

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
