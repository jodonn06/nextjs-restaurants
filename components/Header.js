import { useState } from 'react';
import ButtonUI from './ButtonUI'
import Container from './Container'
import Image from 'next/image'
import MenuOverlay from './MenuOverlay'
import styles from './Header.module.scss'
import Link from 'next/link';

const Header = () => {
    // (1) variable that holds the state, (2) variable that sets the state:
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        { isMenuVisible && <MenuOverlay closeHandler={() => { setMenuVisible(false); }} /> }
        <Container>
            <Link href="/">
            <Image 
                src="/images/syracuse-restaurants-logo.svg" 
                alt="Syracuse Restaurants Logo" 
                width={537} 
                height={86} 
                className={styles.logo} 
            />
            </Link>
        </Container>
    </header>
}
export default Header