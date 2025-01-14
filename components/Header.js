// components/Header.js
import headerStyles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        <span>WebDev </span><span>News</span>
      </h1>
      <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
    </div>
  )
}

export default Header
