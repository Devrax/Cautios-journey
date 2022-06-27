import React, { Component } from 'react'

export default class Post extends Component<{ post: any }> {
  render() {
    const post = this.props.post;
    return (
        <div className="text-white border border-solid border-orange-500 rounded p-2 m-2" style={{ width: '200px' }}>
            <span>
                <h1>{post.title}</h1>
                <p className={`text-xs text-slate-300`}>{post.body}</p>
            </span>
        </div>
    )
  }
}
