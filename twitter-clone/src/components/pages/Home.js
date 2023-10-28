import React, { useState } from 'react';
import { List } from 'antd';

export const HomePage = () => {

  const [newPostContent, setNewPostContent] = useState('');


  const [posts, setPosts] = useState([
    { id: 1, content: 'Content for Post 1' },
    { id: 2, content: 'Content for Post 2' },
  ]);


  const handleInputChange = (e) => {
    setNewPostContent(e.target.value);
  };


  const handleAddPost = () => {
    if (newPostContent.trim() !== '') {

      const newPost = {
        id: posts.length + 1,
        content: newPostContent,
      };

      setPosts([...posts, newPost]);

      setNewPostContent('');
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your post content"
          value={newPostContent}
          onChange={handleInputChange}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      <List
        id="list"
        header="Posts"
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
                title={<p>{item.title}</p>}
                description={<p>{item.content}</p>}
                
            />
          </List.Item>
        )}
    />
    </div>
  );
};

export default HomePage;
