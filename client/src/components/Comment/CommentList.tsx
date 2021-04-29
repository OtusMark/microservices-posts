import React, {useEffect, useState} from 'react'
import axios from "axios";

export const CommentList: React.FC<PropsT> = (props) => {

    const {
        postId
    } = props

    const [comments, setComments] = useState<Array<CommentT>>([])

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

        setComments(res.data)
    }

    useEffect(() => {
        fetchComments()
    }, [])

    const renderedComments = comments.map((comment: CommentT) => {
        return (
            <li key={comment.id}>
                {comment.content}
            </li>
        )
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

// Types
type PropsT = {
    postId: string
}

type CommentT = {
    id: string
    content: string
}