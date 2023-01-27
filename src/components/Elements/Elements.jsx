import { Row } from "antd";
import { useSelector } from "react-redux";
import Element from "../Element/Element";

import "./Elements.css";

function Elements() {

    const posts = useSelector((state) => state.posts)

    return (
        <Row gutter={[8,8]} justify="center">
            {posts.map((item,idx)=>(<Element key={idx} item={item} id={idx} />))}
        </Row>
    );
  }
  
  export default Elements;



