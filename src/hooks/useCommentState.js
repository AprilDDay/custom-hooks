import { useContext } from 'react'
import { StateContext } from './context'

export default function useCommentState () {
    const { state } = useContext(StateContext)
    return state.comments
}