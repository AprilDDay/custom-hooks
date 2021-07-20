import { useContext } from 'react'
import { StateContext } from './context'

export default function usePostsState () {
    const { state } = useContext(StateContext)
    return state.posts
}