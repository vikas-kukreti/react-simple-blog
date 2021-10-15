import { useContext, useRef } from "react";
import Header from "../components/Header";
import {Link} from 'react-router-dom'
import './New.css'
import { AppContext } from "../contexts";
function New() {
    const [{categories, blogs}, setState] = useContext(AppContext)
    const cancelButton = useRef(null)
    const onSubmitEvent = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        if(formData.get('title').trim() === "") {
            alert('Please provide a title for the blog!')
        } else if (formData.get('content').trim() === "") {
            alert('Blog content cannot be empty!')
        } else {
            const blog = {
                id:  Number(blogs[blogs.length-1]?.id || 0) + 1,
                author: 1,
                title: formData.get('title').trim(),
                content: formData.get('content').trim(),
                category: formData.get('category'),
            }
            setState(prev => {
                return {...prev, blogs: [...prev.blogs, blog]}
            })
            alert('Blog posted successfully!')
            cancelButton.current?.click()
            
        }
    }
    return <>
    <Header showNew={false}/>
    <div className="container">
        <form className="form" method="post" onSubmit={onSubmitEvent}>
            <label>
                Title
                <input name="title" />
            </label>
            <label>
                Category
                <select>
                    {Object.entries(categories).map(([i, c]) => <option value={i} key={i}>{c}</option>)}
                </select>
            </label>
            <label>
                Content
                <textarea name="content" rows="8"/>
            </label>
            <button type="submit" className="submit">Submit</button>
            <Link to="/" ref={cancelButton}>
                Cancel
            </Link>
        </form>
    </div>
    </>
}

export default New;