import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Blogs } from "../../Utilities/Blog/blogs-data";
import HeroBlog from "../../Utilities/Hero/HeroBlog/HeroBlog";
import MetaDecorator from "../../MetaDecorator";

import { useLocation } from "react-router-dom";
const content = require("../../SeoData/BlogData.json");

const psots = Blogs

const BlogPost = () => {
    
const location = useLocation();
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const targetPosition = 0;
    
        // Scroll to the calculated position
        window.scrollTo(0, targetPosition);
      }, []);
    return (
        <React.Fragment>

  <MetaDecorator
        description={content.description}
        title={content.title}
        keywords={content.keywords}
        pathname={location.pathname}
      />
      <HeroBlog />

<section className="inner-blog pb-90">

        <section id="work" className="pt-0 pb-10" >
    <div className="portfolio ">
        
        <div className="grid col4 ">
                        {
                              psots.map((data, index) => {
                                const { imageUrl, admin, title, excerpt,id, handle } = data;
                                return (
                                    <div className="grid-item1 ml-4" key={index}>
                                        <Link to={`/blog/${handle}`}>
                                            <figure className="gallery-image">
                                                <img src={imageUrl} alt="img" className="img" />
                                                <figcaption>
                                                    <h4>{title}</h4>
                                                </figcaption>
                                            </figure>
                                            </Link>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                   
                </div>
           
        </section>
                        {/* Right Sidebar */}
                        
            </section>
           
        </React.Fragment>
    );

}
export default BlogPost;