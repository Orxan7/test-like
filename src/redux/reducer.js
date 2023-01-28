const initialState = {
    posts: []
}

export default function reducer(state=initialState, action) {   

    switch(action.type) {
        case 'ADD_POSTS':
            const { posts } = action.payload; 
            return {
                posts: [
                    ...state.posts,
                    ...posts.map((item)=>({url:item, like:false}))
                ],
            }
        case 'LIKE_POST':
            const { id } = action.payload;
            return {
                posts: [...state.posts.map((item, idx)=>{
                    if(idx===id) return {url: item.url, like:true}
                    return item
                })]
            }
        case 'UNLIKE_POST':
            const { idx } = action.payload;

            return {
                posts: [...state.posts.map((item, id)=>{
                    if(id===idx)return {url: item.url, like:false}
                    return item
                })]
            }
        case 'DELETE_POST':
            const { idy } = action.payload;
            return {
                posts: [...state.posts.filter((item, id)=>{
                    if(id===idy)return false
                    return true
                })]
            }
        default:
          return state;
    }
}