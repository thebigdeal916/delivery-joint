
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const SativaCardHook = () => {
    //  setting our state and function to update our state
    const [posts, setPosts] = useState([])
    // useEffect to get info from API
    useEffect(() => {
        // axios api call
        axios
            // get route for data
            .get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => {
                // console logging incoming data
                console.log(response.data)
                // updating our state with api incoming data
                setPosts(response.data)
            })
            // error catching
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <div>
                {/* mapping through our state(posts) and pulling out a single set of data for each card */}
                {posts.map(post => (
                    <div id='card'>
                        <Card>
                            <div id="title">
                                <CardTitle>{post.title}</CardTitle>
                            </div>
                            <div id='body'>
                                <CardText>{post.body}</CardText>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
            {/* our jsx stylesheet */}
            <style jsx>
                {`

                    #card {
                        width: 30%;
                        display: inline-block;
                        margin: 5px;
                        box-shadow: 0 2px 3px #999999, 0 2px 3px #999999;
                     
                    }
                    h1 {
                        color: blue;
                        font-size: 20px;
                    }
                    #title {
                        border-bottom: 1px solid black;
                        height: 25%;
                        width: 100%;
                        background-color: slategrey;
                        color: blue;

                    }
                    `}
            </style>



        </div>
    )


}
// exporting the sativa card component
export default SativaCardHook