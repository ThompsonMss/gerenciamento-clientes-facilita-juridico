import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import { Routes } from './Routes'
import { useGetTheme } from '@Domain/Hooks/useGetTheme'
import { GlobalStyle } from '@Shared/Styles/GlobalStyle'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';

export function App() {

    const { theme } = useGetTheme();

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            <GlobalStyle />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    )
}