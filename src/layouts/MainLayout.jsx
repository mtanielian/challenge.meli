import { Helmet } from 'react-helmet'
import NavBar from '../components/NavBar'
import useMetaTags from '../hooks/useMetaTags'

const MainLayout = ({ children }) => {
  const { title, description, image } = useMetaTags()
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='title' content={title} />

        <meta name='description' content={description} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        
        {Boolean(image) && 
          <meta name='og:image' content={image} />
        }
      </Helmet>

      
      <NavBar />
      <main style={{
        margin: 'auto',
        maxWidth: '1440px',
        padding: '0px 30px',
      }}>
        {children}
      </main>
    </>
  )
}

export default MainLayout