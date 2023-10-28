import React from "react";
import { useState } from "react";
import { Content } from "../content/Content";
import { Button, Input } from "antd";
import posts from '../content/Content';

export const HomePage = () => {
    const [postText, setPostText] = useState('');

    const handleInputChange = (e) => {
        setPostText(e.target.value);
      };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const post = {
        title: 'Post 1',
        content: e,
        author: 'Author 1',
        date: '2023-10-28',
        tags: ['Tag1', 'Tag2']
      }
      posts.push(post)
      // You can add your logic here to handle the submitted post, e.g., send it to a server, update state, etc.
      console.log('Submitted Post:', postText);
      // Clear the input after submission
      setPostText('');
      
    };
    return (
        <>
        <div>
            <Input />
            <Button onClick={handleSubmit} onChange={handleInputChange}>Submit</Button>
        </div>
        <Content />
        </>
    )
}

export default HomePage;