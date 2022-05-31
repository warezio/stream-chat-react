import React from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

// Define values.
const api_key = '6t7v9tf5f55y';
const api_secret = 'tqms39a9d5nhwe3t2caeswq4bwqz69vry3qtp5z8v5fxbxtzn8eug7kfxs6zcqwf';
const user_id = 'warezio';

// Initialize a Server Client
const chatClient = StreamChat.getInstance(api_key, api_secret);
// Create User Token
const userToken = chatClient.createToken(user_id);

// const chatClient = StreamChat.getInstance('6t7v9tf5f55y');
// const userToken = token;

chatClient.connectUser(
  {
    id: 'misty-surf-0',
    name: 'misty',
    image: 'https://getstream.io/random_png/?id=misty-surf-0&name=misty',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['misty-surf-0'],
});

const App = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
