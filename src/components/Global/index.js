import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'hooks'
import SyntaxHighlight from 'utils/syntaxHighlight'
import theme from 'utils/theme'
import Footer from '../Footer'
import Header from '../Header'
import Scroll from '../Scroll'
import Seo from '../Seo'
import { GlobalStyle } from './styles'
import { DocsGrid } from '../styles'
import { LazyPlot } from '../Plotly'

const components = { LazyPlot, DocsGrid }

export default function Global({ children, ...rest }) {
  const [darkMode] = useDarkMode()
  const { site } = useStaticQuery(graphql`
    {
      site {
        site: siteMetadata {
          title
          url
          description
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme(darkMode)}>
      <MDXProvider components={components}>
        <Seo {...site} {...rest} />
        <GlobalStyle />
        <SyntaxHighlight />
        <Header {...site} />
        {children}
        <Footer />
        <Scroll showBelow={1500} css="position: fixed; right: 1em; bottom: 1em;" />
      </MDXProvider>
    </ThemeProvider>
  )
}
