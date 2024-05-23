import Link from 'next/link'
import navStyles from '@/styles/Nav.module.css'

const nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/' legacyBehavior>Home</Link>
            </li>
            <li>
                <Link href='/about' legacyBehavior>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default nav
