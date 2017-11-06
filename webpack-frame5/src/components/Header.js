import React from 'react'
import PropTypes from 'prop-types'

const Header = ({message}) => {
    return (
        <h2 className="header text-center">
            {message}
        </h2>
    )
}

Header.propTypes = {
    message: PropTypes.string
}

export default Header