import './App.css';
import React from 'react';

function App() {
  return <RandomEmoji />;
}

function RandomEmoji() {
  const [emoji, setEmoji] = React.useState('');
  return (
    <div className="wrapper">
      <h1 className='emoji' data-testid="emoji">{emoji}</h1>
      <button 
        onClick={() => setEmoji(randomEmoji())}
        className="button"
        >Acak emoji</button>
    </div>
  );
}

export function randomEmoji() {
  const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚',  '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

export default App;