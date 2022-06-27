import React, { Component } from 'react'
import Post from '../components/Post';

export default class Posts extends Component {

    public state = {
        postStates: {
            isAvailable: false,
            posts: [] as any[],
            hasError: false
        } 
    }
    
    render() {
        const waitingHTML = <div>Loading posts...</div>,
        posts = this.state.postStates.posts.map(post => (
            <div key={post.id} className="my-2">
                <Post post={post} key={post.id}/>
            </div>
        ));

        return (
                <div className="mx-5 flex flex-wrap justify-evenly">
                    {this.state.postStates.isAvailable ? posts : waitingHTML}
                </div>
            )
    }

    componentDidMount() {
        this.getPosts();
    }

    private async getPosts() {
        let posts, isAvailable = false, hasError = false;
        
        try {
            const request = await fetch('https://jsonplaceholder.typicode.com/posts');
            posts = await request.json();
            isAvailable = request.status === 200;
        } catch(err) {
            hasError = true;
        } finally {
            this.setState({
                postStates: {
                    posts,
                    hasError,
                    isAvailable
                }
            });

        }

    }
    
    
}
