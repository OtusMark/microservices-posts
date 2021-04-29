import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";

export const PostCreate = () => {

    const [title, setTitle] = useState('')

    const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await axios.post('http://localhost:4000/posts', {
            title
        })

        setTitle('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title</label>
                    <input value={title} onChange={titleChangeHandler}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}