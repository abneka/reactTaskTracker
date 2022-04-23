import propTypes from 'prop-types'

const Button = ({text, color, width, trigger}) => {
    return (
        <button onClick={trigger} style={{backgroundColor:color, width:width}} className="btn">{text}</button>
    )
}

Button.defaultProps ={
    text : 'BUTTON',
    color : 'green'
}

Button.propTypes = {
    text : propTypes.string,
    trigger : propTypes.func,
}

export default Button