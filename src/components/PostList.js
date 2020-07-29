import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           posts: []
        }
      }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts : response.data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }   

    render() {
        const {posts} =this.state
        // console.log(this.state.posts)
        return (
                <ol>
                {   
                    posts.length ?
                    posts.map(post => <li key={post.id}>{post.title}</li>) :
                    null
                }
                </ol>
        )
    }
}

export default PostList
