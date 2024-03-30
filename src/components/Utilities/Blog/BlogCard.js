import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogData }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      setExpanded(!isExpanded);
    };
    const lastFourBlogs = blogData.slice(-4); // Get the last four blogs

    return (
        <Fragment>
            {
                <div className="portfolio ">
                    
                <div className="grid col4 ">
                    {
                    lastFourBlogs.sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10)).map((data, index) => {

                            const { imageUrl, admin, title, excerpt,id,heading, handle } = data;
                            const words = excerpt.split(' ');
                            const truncatedText = isExpanded ? words.join(' ') : words.slice(0, 20).join(' ');
                            const titleWords = title.split(' ');
                            const truncatedTitle = isExpanded ? titleWords.join(' ') : titleWords.slice(0, 8).join(' ');


                            return (
                                <div className="grid-item3 ml-4" key={index}>
                                    <Link to={`/blog/${handle}`}>
                                        <figure className="gallery-image">
                                            <img src={imageUrl} alt="img" className="img" />
                                            <figcaption>
                                                
                                                <h4>{truncatedTitle}...</h4>
                                                <p>{truncatedText}</p>
                                                {words.length > 10 && (
                                                    <h5 style={{display:"flex",flexDirection:"row-reverse"}} onClick={toggleExpand}>
                                                    {isExpanded ? 'Read Less' : 'Read More....'}
                                                    </h5>
                                                )}
                                            </figcaption>
                                        </figure>
                                        </Link>
                                </div>
                                
                            )
                        })
                    }
                </div>
               
            </div>
            }
        </Fragment>
    )
}
export default BlogCard;