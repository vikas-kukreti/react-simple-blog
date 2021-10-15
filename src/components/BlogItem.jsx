import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts';
import './BlogItem.css'
import editIcon from '../icons/edit.svg'
import deleteIcon from '../icons/delete.svg'
import likeIcon from '../icons/like.svg'
import likedIcon from '../icons/liked.svg'


const BlogItem = (props) => {
    const [{likes, authors}, setState] = useContext(AppContext)
    const author = authors[props.author]
    const liked = likes[props.id]

    const toggleLike = () => {
        setState(prev => ({...prev, likes: {...prev.likes, [props.id]: !likes[props.id]}}));
    }
    const deleteBlog = () => {
        setState(prev => ({...prev, blogs: prev.blogs.filter((b, i) => b.id !== props.id)}))
    }

    return <article className="blog-item">
        <Link to={`/blog/${props.id}`} className="blog-link">
            <h3 className="blog-title">{props.title}</h3>
            <p className="blog-author">by: <strong>{author?.name}</strong></p>
        </Link>
        <div className="buttons">
            <Link className="button" to={`edit/${props.id}`}><img src={editIcon} alt="Edit Icon" /></Link>
            <button onClick={deleteBlog}><img src={deleteIcon} alt="Delete Icon" /></button>
            <button onClick={toggleLike}><img src={liked ? likedIcon : likeIcon} alt="Like Icon" /></button>
        </div>
    </article>
};

export default BlogItem
