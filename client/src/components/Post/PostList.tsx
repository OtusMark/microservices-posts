import React, {useEffect, useState} from 'react'
import axios from "axios";
import {CommentCreate} from "../Comment/CommentCreate";
import { CommentList } from '../Comment/CommentList';

export const PostList = () => {

    const [posts, setPosts] = useState<PostListT>({} as PostListT)

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')

        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map((post: PostT) => {
        return (
            <div key={post.id}>
                <div>
                    <h3>{post.title}</h3>
                    <CommentList postId={post.id}/>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    })

    return (
        <div>
            {renderedPosts}
        </div>
    )
}

// Types
type PostT = {
    id: string
    title: string
}

type PostListT = {
    id: PostT
}