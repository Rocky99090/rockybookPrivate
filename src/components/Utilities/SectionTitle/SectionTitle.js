import titleBottomImg from '../../../assets/img/bg/circle_left.png'
const SectionTitle = ({titlefirst,titleSec,description, className,titlethird})=> {
    return ( 
        <div className={`section-title cta-title mt-10 mb-35 ${className}`}>
            <h1>{titlethird}</h1>
            <h2>{titlefirst} <span>{titleSec}</span><p>{description}</p></h2>
            
            <img src={titleBottomImg} alt="circle left" />
        </div>
     );
}

export default SectionTitle;