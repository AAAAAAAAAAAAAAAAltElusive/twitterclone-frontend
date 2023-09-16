import React from 'react';
import Tweet from './Tweet';

const TweetFeed: React.FC = () => {
  return (
    <div className="flex flex-col w-1/2 border-l border-r border-gray-700 min-h-screen">
      <div className="mt-10 py-11 pb-15 text-center font-bold text-15px text-twitter border-b-2 border-twitter cursor-pointer">
        Tweets
      </div>
      <div className="flex flex-col flex-shrink-0">
        <Tweet type='timeline' />
      </div>
    </div>
  );
};

export default TweetFeed;