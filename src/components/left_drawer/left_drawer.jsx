import Dimmer from "./dimmer";
import Header from "./header";
import DrawerContent from "./drawer_content";
import {useMediaQuery } from 'react-responsive'


const LeftDrawer = () => {
  const mobileView = useMediaQuery({ query: "(max-width: 576px)" });

 

  return (
    <>
    <Dimmer />
        <div className={mobileView ? 'left-drawer left-drawer-mobile':'left-drawer'}>
          <Header />
          <DrawerContent />
        </div>
   
      
    </>
  );
};
export default LeftDrawer;
