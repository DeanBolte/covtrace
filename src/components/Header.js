import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1 className='header-home'>{title}</h1>
            <div className='navbar'>
                <Button color={showAdd ? 'red' : 'green'} text='Covid Information' onClick={onAdd}/>
                <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} onClick={onAdd}/>
            </div>
            

        </header>
    )
}

Header.defaultProps = {
    title: 'CovTrace'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
