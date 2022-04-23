

// // const Header = (props) => {
// //     return (
// //         <div>
// //             <h1>{props.title}</h1>
// //         </div>
// //     )
// // }

// // Header.defaultProps = {
// //     title: 'THIS IS DEFAULT',
// // }

// // export default Header

// import propTypes from 'prop-types'

// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

// Header.propTypes = {
//     title : propTypes.string.isRequired,
// }

// // Header.defaultProps ={
// //     title : 'this is default',
// // }

// export default Header

import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title, displayTaskInput, trigger}) => {
        
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button text={displayTaskInput? 'collapse' : 'expand'} trigger={trigger}/>
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes ={
    title : propTypes.string.isRequired,
}


export default Header