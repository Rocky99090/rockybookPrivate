import React, { useEffect } from "react";
import SideBar from "../../Utilities/Blog/ArchivePost/SideBar";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";

import PostNavigation from "../../Utilities/Blog/SinglePost/PostNavigation";
import RelatedPost from "../../Utilities/Blog/SinglePost/RelatedPost";
import AuthorInfo from "../../Utilities/Blog/SinglePost/AuthorInfo";
import PostContent from "../../Utilities/Blog/SinglePost/PostContent";
import Comments from "../../Utilities/Blog/SinglePost/Comments";
import CommentForm from "../../Utilities/Blog/SinglePost/CommentForm";
import HeroTwo from "../../Utilities/Hero/HeroThree/HeroThree";
import HeroBlog from "../../Utilities/Hero/HeroBlog/HeroBlog";
import { Helmet } from "react-helmet";

const SinglePost = () => {
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const targetPosition = windowHeight/5;
        window.scrollTo(0, targetPosition);
      }, []);
    return (

        <React.Fragment>
  <Helmet>
     <title>RockyBook Informative Blogs │Thrilling Gaming Updates</title>
          <meta name="keywords" content="RockyBook Informative Blogs" />
        <meta name="title" content="RockyBook Informative Blogs │ Thrilling Gaming Updates" />
        
        <meta name="description" content="Dive into the pulse of gaming with RockyBook Insights, your go-to source for thrilling updates and strategic tips. Stay ahead in the gaming arena with our curated content, bringing you the latest trends and expert insights." />

  </Helmet>
            <HeroBlog />

            <section className="inner-blog b-details-p pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-wrap">
                                {/* Post Content */}
                                <PostContent />
                                {/* Post comment */}
                            </div>
                        </div>
                        {/* Right sidebar */}
                        <SideBar />
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}

export default SinglePost;