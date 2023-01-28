import { DeleteOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Col, Image } from "antd";
import { useDispatch } from "react-redux";
import { deletePost, likePost, unlikePost } from "../../redux/actions";

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
        <DeleteOutlined 
            style={{
              fontSize: "30px",
              color: "white"
            }}        
            onClick={()=>dispatch(deletePost(id))}
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



