import { Link, useLocation, useParams } from "react-router-dom";

import img1 from '../../../../assets/img/blog/b_details01.jpg'
import img2 from '../../../../assets/img/blog/b_details02.jpg'
import { Blogs} from "../blogs-data";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SectionBlogTitle from "../../SectionTitle/SectionBlogTitle";

const PostContent = () => {
    const location = useLocation()
    const params = useParams()
    //  const params = new URLSearchParams(window.location.search);
     console.log(location.pathname)
     const id = params.id;
     const data = Blogs
     console.log(id)
     const matchingPost = data.find(post => post.handle === id);
     const renderedContent = [];

    for (let i = 0; i < matchingPost.totalHeads; i++) {
        const headKey = `head${i}`;
        const bodyKey = `body${i}`;

        renderedContent.push(
        <div key={i}>
            {matchingPost[headKey]?
            <>
            {matchingPost[headKey].title?
            <>
                <SectionTitle titleSec={matchingPost[headKey].title?matchingPost[headKey].title:""} description = {matchingPost[headKey].body?matchingPost[headKey].body:""}className="text-center" />
                 {matchingPost[headKey].head0.title?
                  <>
                  
                    <SectionBlogTitle titlefirst={matchingPost[headKey].head0.title?matchingPost[headKey].head0.title:""}   />
                    <p>{matchingPost[headKey].head0.body0?matchingPost[headKey].head0.body0:""}</p> 
                    <p>{matchingPost[headKey].head0.body0?matchingPost[headKey].head0.body1:""}</p> 
                    <p>{matchingPost[headKey].head0.body0?matchingPost[headKey].head0.body2:""}</p> 
                    <SectionBlogTitle titlefirst={matchingPost[headKey].head1.title?matchingPost[headKey].head1.title:""}   />
                    <p>{matchingPost[headKey].head0.body1?matchingPost[headKey].head1.body0:""}</p> 
                    <p>{matchingPost[headKey].head0.body1?matchingPost[headKey].head1.body1:""}</p> 
                    <p>{matchingPost[headKey].head0.body1?matchingPost[headKey].head1.body2:""}</p> 
                    <SectionBlogTitle titlefirst={matchingPost[headKey].head2.title?matchingPost[headKey].head2.title:""} />
                    <p>{matchingPost[headKey].head0.body2?matchingPost[headKey].head2.body0:""}</p> 
                    <p>{matchingPost[headKey].head0.body2?matchingPost[headKey].head2.body1:""}</p> 
                    <p>{matchingPost[headKey].head0.body2?matchingPost[headKey].head2.body2:""}</p> 

                    </>:
                  <>
                  <SectionBlogTitle titlefirst={matchingPost[headKey]['head0']?matchingPost[headKey]['head0']:""} />
                  <p>{matchingPost[headKey]['body0']?matchingPost[headKey]['body0']:""}</p>
                  <SectionBlogTitle titlefirst={matchingPost[headKey]['head1']?matchingPost[headKey]['head1']:""}  />
                  <p>{matchingPost[headKey]['body1']?matchingPost[headKey]['body1']:""}</p>
                  <SectionBlogTitle titlefirst={matchingPost[headKey]['head2']?matchingPost[headKey]['head2']:""} />
                  <p>{matchingPost[headKey]['body2']?matchingPost[headKey]['body2']:""}</p>
                  <SectionBlogTitle titlefirst={matchingPost[headKey]['head3']?matchingPost[headKey]['head3']:""} />
                  <p>{matchingPost[headKey]['body3']?matchingPost[headKey]['body3']:""}</p>
                  <SectionBlogTitle titlefirst={matchingPost[headKey]['head4']?matchingPost[headKey]['head4']:""} />
                  <p>{matchingPost[headKey]['body4']?matchingPost[headKey]['body4']:""}</p>
               

                </>
                }
            
            {/* <h3>{matchingPost[headKey].body}</h3> */}
            {/* <SectionTitle titlefirst={matchingPost[headKey].body} className="text-center" /> */}
            {/* <SectionTitle titleSec={matchingPost[headKey]} className="text-center" /> */}
            
            </>:
            <>
            <SectionTitle titlefirst={matchingPost[headKey]} className="text-center" />
            <p>{matchingPost[bodyKey]}</p>
            </>
            }
            </>:""}
            {/* <p>{matchingPost[bodyKey].body}</p>
            <SectionTitle titleSec={matchingPost[headKey].title} className="text-center" /> */}
        </div>
        );
    }
    
    return (
        <div className="details__content pb-30">
            {/* <h1>{matchingPost.heading}</h1> */}
            <SectionTitle titleSec={matchingPost.heading} className="text-center" />
             <div className="details__content-img">
                <img src={matchingPost.imageUrl} alt="" />
            </div>
            
            <h3 className="mt-4">{matchingPost.title}</h3>
            <p>{matchingPost.excerpt}</p>
            <p>{matchingPost.excerpt1}</p>

            <div>{renderedContent}</div>
            
            <span  className="text-center" >{matchingPost.conclusion}</span>
           
        </div>
    );
}

export default PostContent;