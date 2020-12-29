import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';


import '../../css/post-list.css';

const PostList = ({posts, onAppDelete, onToggleImportant, onToggleLiked}) => {
    
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onAppDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;