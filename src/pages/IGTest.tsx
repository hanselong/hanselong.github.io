// src/pages/IGTest.tsx
import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const IGTest: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url="https://www.instagram.com/p/C4ZULjtxZrD/" captioned width={328} />
    </div>
  );
};

export default IGTest;