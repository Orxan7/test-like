import { Button, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Elements from "../components/Elements/Elements";
import { addPosts } from "../redux/actions";

import './MainPage.css'

function MainPage() {

    const dispatch = useDispatch()

    const [checked, setChecked] = useState(false)

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
            <Checkbox checked={checked} onChange={()=>checked?setChecked(false):setChecked(true)}>
                Liked photos
            </Checkbox>
            <Elements checked={checked}/>
            {!checked?(
                <Button
                    style={{
                        marginBottom: '20px'
                    }}
                    onClick={getPosts}
                >More photos
                </Button>
            ):null}

        </>
    );
  }
  
  export default MainPage;
