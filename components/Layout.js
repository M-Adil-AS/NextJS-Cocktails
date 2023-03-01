import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export const Layout = ({children}) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>          
        <br/>
      </div>
      {children}
    </>
  )
}


export default Layout