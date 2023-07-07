import { useState } from "react";

const Title = () => (
  <h2 id="gone" key="h1 ">
    Food Bar
  </h2>
);
const Header = () => {
  const [title,setTitle] = useState("Food bar")
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={()=>setTitle("Food Villa")}>Change Title</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
