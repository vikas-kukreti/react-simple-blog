import { useContext, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import {AppContext} from '../contexts'
import './Blog.css'

import userIcon from '../icons/user.svg'
import likeIcon from '../icons/like.svg'
import likedIcon from '../icons/liked.svg'
import locationIcon from '../icons/location.svg'
import categoryIcon from '../icons/category.svg'

function Blog(props) {
    const params = useParams()
    const [{blogs, authors, likes, categories}, setState] = useContext(AppContext)
    const blog = blogs.find(b => b.id === Number(params.id))
    const author = authors[blog.author]
    const category = categories[blog.category]

    const toggleLike = () => {
        setState(prev => ({...prev, likes: {...prev.likes, [blog.id]: !likes[blog.id]}}));
    }

    return <>
            <Header />
            <div className="container">
                <article className="blog-content">
                    <section className="blog-header">
                        <div className="blog-info">
                            <h1 className="blog-title">{blog.title}</h1>
                            <strong className="blog-author">
                                <img src={userIcon} alt="Author Icon" /> {author.name}
                                <img src={locationIcon} alt="Location Icon" /> {author.location}
                                <img src={categoryIcon} alt="Category Icon" /> {category}
                            </strong>
                        </div>
                        <button className="like-button" onClick={toggleLike}>
                            <img src={likes[blog.id] ? likedIcon : likeIcon} alt="Like Icon" />
                        </button>
                    </section>
                    {blog.content.split('\n').map((p, i) => <p key={i} className="blog-para">{p}</p>)}
                </article>
            </div>
        </>;
}

export default Blog;