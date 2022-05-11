import React from "react";

const ParentComponent = () => {
  const [keranjang, setKeranjang] = React.useState(0);
  return (
    <>
      <h1>Isi keranjang : {keranjang}</h1>
      <ChildComponent keranjang={keranjang} setKeranjang={setKeranjang} />
    </>
  );
};

const ChildComponent = (props) => {
  const { keranjang, setKeranjang } = props;
  return (
    <>
      <button onClick={() => setKeranjang(keranjang + 1)}>
        Klik untuk menambah keranjang
      </button>
    </>
  );
};

export default ParentComponent