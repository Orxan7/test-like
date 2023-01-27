import { Button } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Elements from "../components/Elements/Elements";
import { addPosts } from "../redux/actions";

function MainPage() {

    const dispatch = useDispatch()

    const getPosts = ()=>{
        fetch('http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true')
            .then(res=>res.json())
            .then(data=>dispatch(addPosts(data)))
    }

    useEffect(()=>{
        getPosts()
    },[])

    return (
        <>
            <Elements />
            <Button
                style={{
                    marginBottom: '20px'
                }}
                onClick={getPosts}
            >More photos
            </Button>
        </>
    );
  }
  
  export default MainPage;
