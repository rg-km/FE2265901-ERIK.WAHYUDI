import React from "react";

const App = () => {
  const user = {
    avatarUrl: "https://www.w3schools.com/tags/img_girl.jpg",
  };

  const name = "andi";

  const element = (
    <div tabIndex="0">
      <h1 className="title">Halo!</h1>
      <h2>Senang melihatmu di sini.</h2>
    </div>
  );

  return (
    <div className="App">
      <h1>Halo, nama saya {name}</h1>
      <p>{2 + 2}</p>
      <img src={user.avatarUrl} />
      {element}
    </div>
  );
};

export default App;