import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetching;
