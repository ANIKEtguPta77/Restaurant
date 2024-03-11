import '@styles/globals.css';
import '@styles/cart.css';
import '@styles/button.css';
import '@styles/pop.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata={
    title:"Menu App",
    description:"Ordering Made Easier"
}


const RootLayout = ({children}) => {
    return (
      <html lang="en">
          <body>
            <Provider>
              <div className='main'>
                  <div className='gradient'/>
              </div>
              <main className='app'>
                <Nav/>
                  {children}
              </main>
              </Provider>
          </body>
      </html>
    )
  }
  
  export default RootLayout