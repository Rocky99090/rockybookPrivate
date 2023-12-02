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

const SinglePost = () => {
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const targetPosition = windowHeight/5;
        window.scrollTo(0, targetPosition);
      }, []);
    return (

        <React.Fragment>
            <HeroTwo />

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