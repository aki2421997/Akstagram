import React, { Component } from "react";
import ImageList from "./Components/ImageList/ImageList";
import NavbarFixed1 from "./Components/Navbar/NavbarFixed1";
import CustomizedDialogs from './Components/AddPhotos/AddPhoto1'
// import DrawerLeft from "./Components/Navbar/NavbarWithDrawer";

class Main extends Component {
  render() {
    return (
          <div>
            <NavbarFixed1 />
            {/* <DrawerLeft/> */}
            <ImageList/>
            <CustomizedDialogs/>
          </div>
    );
  }
}

export default (Main);
