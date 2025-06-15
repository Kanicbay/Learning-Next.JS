import styles from '@/app/ui/home.module.css'
import { bebas } from './ui/fonts';

const Home = () => {
    return (
        <div>
            <h1 className={`${bebas.className} ${styles.text}`}>Comenzando la app</h1>
            <p className='p-10 text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum unde esse asperiores rem deleniti aliquid reiciendis, nesciunt blanditiis hic voluptatem dolore cupiditate doloremque, excepturi veritatis ipsum nemo, enim libero sed!
            </p>
        </div>
    );
}

export default Home;