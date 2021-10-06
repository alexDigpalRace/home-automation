import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div className='Header'>
            <h3>{ title }</h3>
        </div>
    );
}

Header.defaultProps = {
    title: 'Header left on default!!!!'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;