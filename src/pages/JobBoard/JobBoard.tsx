import CardList from '../../components/CardList/CardList';
import Pagination from '../../components/Pagination/Pagination';

const JobBoard = () => {
    return (
        <section className='bg-white-200 pb-24'>
            <CardList/>
            <Pagination/>
        </section>
    )
}

export default JobBoard;