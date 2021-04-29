import React, {ChangeEvent, FormEvent, useState} from 'react'
import axios from "axios";

export const CommentCreate: React.FC<PropsT> = (props) => {

    const {
        postId
    } = props

    const [content, setContent] = useState('')

    const contentChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        })

        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>New Comment</label>
                    <input value={content} onChange={contentChangeHandler}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

// Types
type PropsT = {
    postId: string
}