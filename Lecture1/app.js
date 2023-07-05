      const heading = React.createElement("h1", {}, "Namaste everyone");

      console.log(heading);
      const root = ReactDOM.createRoot(document.getElementById("root"));

      //passing react element inside the root
      root.render(heading);