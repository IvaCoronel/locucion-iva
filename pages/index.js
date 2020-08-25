import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Grid from '@material-ui/core/Grid'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Blog de un bebo chiquito</title>
      </Head>
      <body>
        <h1 className= {styles.titulo}>
          Bienvenides a mi blog!
        </h1>
        <Grid 
          container
          direction= "row"
          justify = "center"
          alignItems="center">
           <NavBar> </NavBar>
        </Grid>
        
      </body>
      
    </div>
   
  )
}
