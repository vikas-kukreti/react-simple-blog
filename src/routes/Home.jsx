import { useContext } from "react";
import Header from "../components/Header";
import BlogItem from "../components/BlogItem";
import { AppContext } from "../contexts";

function Home() {
    const [{blogs}] = useContext(AppContext)
    return (
        <>
            <Header />
            <div className="container">
                {blogs.map((blog, index) => <BlogItem key={blog.id} {...blog}/>)}
            </div>
        </>
    );
}

export default Home;
