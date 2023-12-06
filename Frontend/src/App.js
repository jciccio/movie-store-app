import './App.css';

import Footer from './components/common/Footer';

import { createTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

import SiteRoutes from './components/SiteRoutes/SiteRoutes';
import { I18nextProvider } from 'react-i18next';
import i18next from './config/i18n';

function App() {
  const theme = createTheme();

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={theme}>
          <SiteRoutes />
          <Footer />
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}



export default App;
