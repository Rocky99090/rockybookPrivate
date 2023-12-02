import titleBottomImg from '../../../assets/img/bg/circle_left.png'
const SectionBlogTitle = ({titlefirst,titleSec,description, className})=> {
    return ( 
        <div >
            <h4>{titlefirst} <span>{titleSec}</span><p>{description}</p></h4>
        </div>
     );
}

export default SectionBlogTitle;