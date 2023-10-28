import React from "react";
import { List } from'antd';


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