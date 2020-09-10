import React from 'react'
import PropTypes from 'prop-types'

function InlineError({message}) {
    return (
        <div className='Inline'>
            {message}
        </div>
    )
}

InlineError.propTypes = {
  message:PropTypes.string.isRequired
}

export default InlineError

