import {Link} from 'react-router'
import React from 'react'

export default function Posts(props) {
    return( 
        <div>Posts
           <ol>
                {props.route.posts.map(
                    (post, index)=> 
                        <li key={post.slug}><Link to={`/posts/${post.slug}`} >{post.title}</Link></li>
                    )
                }
        </ol>
        </div>
    )
}