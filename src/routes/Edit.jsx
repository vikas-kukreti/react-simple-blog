import { useContext, useRef, useState } from "react";
import Header from "../components/Header";
import {Link, useParams} from 'react-router-dom'
import './New.css'
import { AppContext } from "../contexts";


function Edit() {
    const [{categories, blogs}, setState] = useContext(AppContext)
    const params = useParams()
    const [blog, setBlog] = useState(blogs.find(b => b.id == params.id))
    console.log(blog)
    const cancelButton = useRef(null)
    const onSubmitEvent = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        if(formData.get('title').trim() === "") {
            alert('Please provide a title for the blog!')
        } else if (formData.get('content').trim() === "") {
            alert('Blog content cannot be empty!')
        } else {
            setState(prev => {
                return {...prev, blogs: [...prev.blogs.filter(b => b.id != blog.id), blog]}
            })
            alert('Blog updated successfully!')
            cancelButton.current?.click()
        }
    }
    return <>
    <Header showNew={false}/>
    <div className="container">
        {!blog && "Blog Not Found!"}
        <form className="form" method="post" onSubmit={onSubmitEvent}>
            <label>
                Title
                <input name="title" value={blog.title} onChange={(e) => setBlog(prev => ({...prev, title: e.target.value}))}/>
            </label>
            <label>
                Category
                <select name="category" onChange={(e) => setBlog(prev => ({...prev, category: e.target.value}))}>
                    {Object.entries(categories).map(([i, c]) => <option value={i} key={i} selected={blog.category === i}>{c}</option>)}
                </select>
            </label>
            <label>
                Content
                <textarea name="content" rows="8">{blog.content}</textarea>
            </label>
            <button type="submit" className="submit">Update</button>
            <Link to="/" ref={cancelButton}>
                Cancel
            </Link>
        </form>
    </div>
    </>
}

export default Edit;