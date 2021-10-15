import './Header.css'
import {Link} from 'react-router-dom'
const Header = (props) =>(
    <header className="header">
        <div className="container">
            <h1 className="page-title">Vikas Blogs</h1>
            <nav className="navigation">
                {props?.navItems?.map(i => <Link href={i.href} key={i.href} className="button">{i.title}</Link>)}
                {props.showNew !== false && <Link to="/new" className="button">Post New Blog</Link> }
            </nav>
        </div>
    </header>
);

export default Header
