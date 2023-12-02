import bg from '../../../assets/img/slider/hero-5.jpg'
import { Link } from 'react-router-dom';
const Breadcrumb = ({ pageTitle, currentPage})=>{
    return(
        <section className="breadcrumb-area d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="breadcrumb-wrap text-left">
                            <div className="breadcrumb-title">
                                <h2>{pageTitle}</h2>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;