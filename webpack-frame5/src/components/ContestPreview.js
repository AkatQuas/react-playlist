import React from 'react'
import PropTypes from 'prop-types'

class ContestPreview extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.id)
    }
    render () {
        const { props, handleClick } = this
        return (
            <div className="link contestPreview" onClick={handleClick}>
                <div className="category-name">
                    { props.categoryName }
                </div>
                <div className="contest-name">
                    { props.contestName }
                </div>
            </div>
        )
    }
}

ContestPreview.propTypes = {
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default ContestPreview