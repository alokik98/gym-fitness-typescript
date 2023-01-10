import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponserRedBull from "@/assets/SponserRedBull.png";
import SponserForbes from "@/assets/SponserForbes.png";
import SponserFortune from "@/assets/SponserFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section
      id="home"
      className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
      {/* IMAGE AND MAIN HEADER */}
      <div></div>
    </section>
  )
}

export default Home