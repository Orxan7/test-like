import { Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../redux/actions";
import Element from "./Element/Element";

function Elements() {

    const dispatch = useDispatch()

    const posts = useSelector((state) => state.posts)

    useEffect(()=>{
        fetch('http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true')
            .then(res=>res.json())
            .then(data=>dispatch(addPosts(data)))
    },[])

    return (
        <div className="elements">
        <Row gutter={[8,8]} justify="center">
            {posts.map((item,idx)=>(<Element key={idx} item={item} id={idx} />))}
        </Row>
        </div>
    );
  }
  
  export default Elements;



