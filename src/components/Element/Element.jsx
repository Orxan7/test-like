import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Col, Image } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../redux/actions";

import "./Element.css"

function Element({item, id}) {

  const dispatch = useDispatch()

  return (
    <Col>
        <Image
          width={250}
          height={250}
          src={item.url}
          preview={false}
        />
        {!item.like?
          <HeartOutlined 
            style={{
              fontSize: "50px",
              color: "red"
            }}
            onClick={()=>dispatch(likePost(id))}
          />:
          <HeartFilled 
            style={{
              fontSize: "50px",
              color: "red"
            }}
            onClick={()=>dispatch(unlikePost(id))}
          />
        }  
    </Col> 
  );
}

export default Element;



