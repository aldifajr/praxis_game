import { Navigate, Route, Routes } from 'react-router-dom';
import { screens } from './screens';
import HomePage from './pages/HomePage';
import DevScreensPage, { ScreenPlaceholder } from './pages/DevScreensPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dev/screens" element={<DevScreensPage />} />
      {screens.map((screen) => {
        const Screen = screen.component;
        return (
          <Route
            key={screen.path}
            path={screen.path}
            element={Screen ? <Screen /> : <ScreenPlaceholder screen={screen} />}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
