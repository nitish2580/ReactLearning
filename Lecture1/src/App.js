      import React from "react";
      import ReactDOM from "react-dom/client";
      import Header from "./component/Header";
      import Footer from "./component/Footer";
      import Body from "./component/Body";
      import { IMG_COM_URL } from "./constants";
      import { restaurantList } from "./constants";
        
      const AppLayout = () => {
        return (
          <>
            <Header />
            <Body />
            <Footer />
          </>
        );
      };
      const root = ReactDOM.createRoot(document.getElementById("root"));

      //passing react element inside the root
      root.render(<AppLayout/>);