import headerStyles from '../styles/Header.module.css'

// color: ${x > 3 ? 'red' : 'blue'} <-- that line on line 14 is conditional styling that appears . Saying that if value x is greater than 3, color should be red. else, color should be blue
const Header = () => {
  //   const x = 2
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest Web Dev News!
      </p>
    </div>
  )
}

export default Header
