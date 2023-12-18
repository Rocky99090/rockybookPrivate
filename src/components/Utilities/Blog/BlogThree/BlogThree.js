import SectionTitle from "../../SectionTitle/SectionTitle";
import BlogCard from "../BlogCard";
import { Blogs} from "../blogs-data";

const data  = Blogs
const BlogThree = () => {
    return (
       <section id="blog" className="blog-area style-two p-relative pt-10 pb-0 fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        {/* Section title */}
                        <SectionTitle titlefirst="LATEST Blog" titleSec="ARTICLES" className="text-center" />
                    </div>
                </div>
                <div className="row">
                    {/* Blog Card */}
                    <BlogCard blogData={data} />
                </div>
            </div>
        </section>
    )
}
export default BlogThree;