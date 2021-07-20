import { useState } from 'react'
//maybe this was not put in the right structure
import useCommentstate from '../hooks/useCommentState'
//possibly use the following if it does not run
//import useCommentState from './useCommentState'

function DisplayComments () {
    const comments = useCommentState();
    return (
        <div>
            { comments.length > 0? (
                comments.map( (comment, idx) => (<h4 key={idx}>{comment}</h4>))
            ): (<h4>no comments</h4>)
        }
        </div>
    )
}

export default DisplayComments;