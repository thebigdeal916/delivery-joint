import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';





class HybridCard extends React.Component {
    state = { posts: [] };

    async componentDidMount() {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        this.setState({ posts: res.data })
        console.log(res)

        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }







    handleClick(e) {
        alert('hello')
        e.preventDefault()
    }


    handleSubmit() {

        const product = {
            name: 'test',
            email: 'test email'
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", product)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            alert('test')

    }

    render() {
        return (
            <Container>
                <Row>
                    <div className="main">
                        {this.state.posts.length > 0 ? (
                            <div>{this.state.posts.map((post) =>
                                <div id="card-body">
                                    <Card>
                                        <CardBody>
                                            <div id="title">
                                                <CardTitle>{post.name}</CardTitle>
                                            </div>
                                            <br />
                                            <CardSubtitle>{post.body}</CardSubtitle>
                                            <br />
                                            <CardText>{post.email}</CardText>
                                            <br />
                                            <div id="btn">
                                                <Button onClick={this.handleSubmit}>Push Me!!!</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>

                            )}</div>
                        ) : (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                        <style jsx>
                            {`
                        #list {
                            color: blue;
                            width:40%;
                        }
                        #one {
                            color: red;
                          
                        }
                        #btn {
                            margin-left: 25%;
                        }
                        #card-body {
                            width: 30%;
                            display: inline-block;
                            margin: 5px;
                            box-shadow: 0 2px 3px #999999, 0 2px 3px #999999;
                        }
                        #title {
                            border-bottom: 1.5px solid black;
                        }
                      
                    `}
                        </style>
                    </div>
                </Row>
            </Container>
        )
    }

}


export default HybridCard;