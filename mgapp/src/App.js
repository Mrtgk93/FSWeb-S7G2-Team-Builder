import "./App.css";
import { useState } from "react";
import Form from "./Form";

function App() {
  const uyeAli = {
    isim: "Ali",
    soyisim: "veli",
    email: "ali93@hotmail.com",
    rol: "öğrenci",
    yaş: "25",
  };
  const [uyeler, setUyeler] = useState([
    {
      isim: "Mert",
      soyisim: "Gök",
      email: "mrtgk93@hotmail.com",
      rol: "Enerji Sistemleri Mühendisi",
      yaş: "29",
    },
    uyeAli,
  ]);

  function uyeEkle(eklenenUye) {
    const yeniUyeState = [...uyeler, eklenenUye];
    setUyeler(yeniUyeState);
  }
  console.log(uyeler);
  return (
    <div className="App">
      <Form handleSubmitCallBack={uyeEkle} />
    </div>
  );
}

export default App;
