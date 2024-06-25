import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAddTask}) => {
  const location = useLocation()
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && (<Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick={onAdd}/>)}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Task',
}


// const headingStyle = {
//   color:'red', 
//   backgroundColor:'blue'
// }

export default Header
