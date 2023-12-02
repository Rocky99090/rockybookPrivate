import SectionTitle from "../SectionTitle/SectionTitle";
import img1 from '../../../assets/img/gallery/protfolio-img01.png'
import img2 from '../../../assets/img/gallery/protfolio-img02.png'
import img3 from '../../../assets/img/gallery/protfolio-img03.png'
import GameCard from "./GameCard";
import workImg1 from '../../../assets/img/gallery/protfolio-img01.png';
import workImg2 from '../../../assets/img/gallery/protfolio-img02.png';
import workImg3 from '../../../assets/img/gallery/protfolio-img03.png';
import workImg4 from '../../../assets/img/gallery/protfolio-img04.png';
import workImg5 from '../../../assets/img/gallery/protfolio-img05.png';
import workImg6 from '../../../assets/img/gallery/protfolio-img06.png';
import workImg7 from '../../../assets/img/gallery/protfolio-img07.png';
import workImg8 from '../../../assets/img/gallery/protfolio-img08.png';

const TrendingData = [
    {
        img: workImg1,
        tag: 'Origin',
        label: 'Bunny Officers',
        description: 'Duis aute irure dolor i',
        cat: 'Origin',
    },
    {
        img: workImg2,
        tag: 'New',
        label: 'Wonderland',
        description: 'Duis aute irure dolor i',
        cat: 'Origin',
    },
    {
        img: workImg3,
        tag: 'New',
        label: 'Apex Legends',
        description: 'Duis aute irure dolor i',
        cat: 'Playstation',
    },
    {
        img: workImg4,
        tag: 'Origin',
        label: 'Wraith',
        description: 'Duis aute irure dolor i',
        cat: 'Playstation',
    },
    {
        img: workImg5,
        tag: 'New',
        label: 'Apex Legends',
        description: 'Duis aute irure dolor i',
        cat: 'Steam',
    },
    {
        img: workImg6,
        tag: 'Origin',
        label: 'Wraith',
        description: 'Duis aute irure dolor i',
        cat: 'Steam',
    },
    {
        img: workImg7,
        tag: 'Origin',
        label: 'Wraith',
        description: 'Duis aute irure dolor i',
        cat: 'Uplay',
    },
    {
        img: workImg8,
        tag: 'New',
        label: 'Wonderland',
        description: 'Duis aute irure dolor i',
        cat: 'Uplay',
    },
]

const TrendingGames = () => {
    return (
        <section id="work" className="pt-120 pb-65" style={{ background: '#f6d145' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Section title */}
                        <SectionTitle
                            titlefirst={'Trending'}
                            titleSec={'Games'}
                            className={'text-center'} />
                    </div>

                    <GameCard TrendingData={TrendingData} />

                </div>
            </div>
        </section>
    );
}
export default TrendingGames;