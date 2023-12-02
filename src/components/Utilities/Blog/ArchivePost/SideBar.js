import { Link } from "react-router-dom";
import { Blogs} from "../blogs-data";

const recentPosts = Blogs


const SideBar = () => {
    return (

        <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar-widget">
              
                <section id="custom_html-5" className="widget_text widget widget_custom_html">
                    <h2 className="widget-title">{'Follow Us'}</h2>
                    <div className="textwidget custom-html-widget">
                        <div className="widget-social">
                            <a rel="nofollow" href='https://t.me/rockybook2121'>
                                <i className="fab fa-telegram"></i>
                            </a>
                            <a rel="nofollow" href='https://www.instagram.com/rockybook2121/'>
                                 <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </section>
                
                <section id="recent-posts-4" className="widget widget_recent_entries">
                    <h2 className="widget-title">{'Recent Posts'}</h2>
                    <ul>
                        {
                            recentPosts.map((data, index) => {
                                const { title, id , handle} = data;
                                return (
                                    <li key={index}> <Link to={`/blog/${handle}`}>{title}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
                
            </aside>
        </div>

    );
}

export default SideBar;