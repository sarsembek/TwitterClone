import React from "react";
import { List } from'antd';

export const posts = [
  {
    title: 'Post 1',
    content: 'Content for Post 1.',
    author: 'Author 1',
    date: '2023-10-28',
    tags: ['Tag1', 'Tag2']
  },
  {
    title: 'Post 2',
    content: 'Content for Post 2.',
    author: 'Author 2',
    date: '2023-10-29',
    tags: ['Tag3', 'Tag4']
  },
  {
    title: 'Post 3',
    content: 'Content for Post 3.',
    author: 'Author 3',
    date: '2023-10-30',
    tags: ['Tag5', 'Tag6']
  },
  {
    title: 'Post 4',
    content: 'Content for Post 4.',
    author: 'Author 4',
    date: '2023-10-31',
    tags: ['Tag7', 'Tag8']
  },
  {
    title: 'Post 5',
    content: 'Content for Post 5.',
    author: 'Author 5',
    date: '2023-11-01',
    tags: ['Tag9', 'Tag10']
  },
  {
    title: 'Post 6',
    content: 'Content for Post 6.',
    author: 'Author 6',
    date: '2023-11-02',
    tags: ['Tag11', 'Tag12']
  },
  {
    title: 'Post 7',
    content: 'Content for Post 7.',
    author: 'Author 7',
    date: '2023-11-03',
    tags: ['Tag13', 'Tag14']
  },
  {
    title: 'Post 8',
    content: 'Content for Post 8.',
    author: 'Author 8',
    date: '2023-11-04',
    tags: ['Tag15', 'Tag16']
  },
  {
    title: 'Post 9',
    content: 'Content for Post 9.',
    author: 'Author 9',
    date: '2023-11-05',
    tags: ['Tag17', 'Tag18']
  },
  {
    title: 'Post 10',
    content: 'Content for Post 10.',
    author: 'Author 10',
    date: '2023-11-06',
    tags: ['Tag19', 'Tag20']
  }
];



export const Content = () => {
    return (
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
    )
}

export default Content;