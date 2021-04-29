import React from 'react'
import {PostCreate} from './components/Post/PostCreate'
import {PostList} from './components/Post/PostList'

export const App = () => {
    return (
        <div>
            <h1>Create Post</h1>
            <PostCreate/>
            <h1>Posts</h1>
            <PostList/>
        </div>
    )
}