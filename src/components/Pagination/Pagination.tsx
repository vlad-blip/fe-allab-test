import {ArrowLeft, ArrowRight} from '../Arrows/Arrows';
import ButtonPage from '../ButtonPage/ButtonPage';

export default function Pagination() {
    return (
        <nav className='flex items-center max-w-fit text-base xl:text-xl font-bold bg-white text-blue-600 shadow-pagination rounded-2xl py-4 px-4 xl:px-10 mx-auto'>
            <a href="#" className='hidden xl:block'><ArrowLeft/></a>
            <ul className='flex gap-4 px-8 xl:px-12 mx-8 xl:mx-12 border-x border-white-500'>
                <ButtonPage isActive>1</ButtonPage>
                <ButtonPage>2</ButtonPage>
                <ButtonPage>3</ButtonPage>
                <ButtonPage>4</ButtonPage>
                <ButtonPage>5</ButtonPage>
                <ButtonPage>...</ButtonPage>
                <ButtonPage>18</ButtonPage>
            </ul>
            <a href="#" className='hidden xl:block'><ArrowRight/></a>
        </nav>
    )
}