import React from 'react';

export default function Footer() {
  return (
    <div style={{ textAlign: 'center', padding: '10px',  }}>
      <p>© {new Date().getFullYear()} FoodRecipeBlog</p>
    </div>
  );
}
