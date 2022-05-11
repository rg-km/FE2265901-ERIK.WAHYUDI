import React from "react";

const ParentComponent = () => {
  const [title, setTitle] = React.useState("Kosong");

  const changeTitle = (title) => {
    setTitle(title);
    console.log("title");
  };
  return (
    <>
      <h1>Keranjang Kamu {title}</h1>
      <ChildComponent changeTitle={(title) => changeTitle(title)} />
    </>
  );
};

const ChildComponent = ({ changeTitle }) => {
  const [keranjang, setKeranjang] = React.useState(0);
  return (
    <>
      <button
        onClick={() => {
          if (keranjang < 10) {
            if (keranjang >= 0 && keranjang < 5) {
              changeTitle("Berisi");
            } else if (keranjang >= 5 && keranjang < 9)
              changeTitle("Hampir Penuh");
            else changeTitle("Penuh");
            setKeranjang(keranjang + 1);
          } else {
            alert("sudah tidak bisa lagi ditambahkan !!!!");
          }
        }}
      >
        Klik untuk menambah keranjang
      </button>
      <h1>Isi keranjang : {keranjang}</h1>
    </>
  );
};

export default ParentComponent;