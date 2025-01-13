import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/footer';
import HeroOther from '@/sections/HeroOther';
import CardOptions from '@/sections/CardOptions';


function Shop() {
      return (
            <>
                  <Head>
                        <title>Shop - IntroTaps</title>
                  </Head>
                  <NavBar active="shop" />
                  <HeroOther title="It's All About" words={["Future", "2025", "Nature", "Time", "Networking", "Modernism", "Simplicity"]} tagline="Shop From Our All Inclusive Collection Below"/>
                  <CardOptions />
                  <Footer />
            </>
      );
}

export default Shop;