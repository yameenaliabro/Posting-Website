"use client"
import { PostContext } from '@src/app/context'
import { useContext } from 'react'

const UsePost = () => {
    const value = useContext(PostContext)
    if (!value) {
        throw new Error("🚀 ~ file: usePost.ts:7 ~ UsePost ~ !value:")
    }
    return value
}

export default UsePost