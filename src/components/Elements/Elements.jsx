import { Row } from "antd";
import { useSelector } from "react-redux";
import Element from "../Element/Element";

import "./Elements.css";

function Elements({checked}) {

    const posts = useSelector((state) => state.posts)

    return (
        <Row gutter={[8,8]} justify="center">
            {checked?
            posts.map((item,idx)=>(item.like?<Element key={idx} item={item} id={idx} />:null)):
            posts.map((item,idx)=>(<Element key={idx} item={item} id={idx} />))}
        </Row>
    );
  }
  
  export default Elements;



