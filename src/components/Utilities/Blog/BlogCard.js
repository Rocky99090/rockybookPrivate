import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../../assets/img/blog/b_details01.jpg'
import img2 from '../../../assets/img/blog/b_details02.jpg'
import img3 from '../../../assets/img/blog/b_details03.jpg'
import img4 from '../../../assets/img/blog/b_details04.jpg'

const BlogCard = ({ blogData }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      setExpanded(!isExpanded);
    };
    return (
        <Fragment>
            {
                <div className="portfolio ">
                    
                <div className="grid col4 ">
                    {
                          blogData.map((data, index) => {
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