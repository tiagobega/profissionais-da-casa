import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from 'styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Profissionais da casa</h1>
    </ThemeProvider>
  )
}

export default App
