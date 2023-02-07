import { useState } from "react";
import React from "react";

let uyeListesi = {
  isim: "",
  soyisim: "",
  email: "",
  rol: "",
  yaş: "",
};
export default function Form() {
  const [uye, setUye] = useState({
    isim: "",
    soyisim: "",
    email: "",
    rol: "",
    yaş: "",
  });

  function handleInputChange(event) {
    const { value, id } = event.target;
  }
  /* const yeniState = {
    ...uye,
    [id]: value,
  }; */

  /* setUye(yeniState); */

  function handleClearForm() {
    console.log("form temizlendi");
    setUye({
      isim: "",
      soyisim: "",
      email: "",
      rol: "",
      yas: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(uye);
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Üye Bilgileri</legend>
          <p>
            <label htmlFor="isim">İsim: </label>
            <input
              /* onChange={handleInputChange} */
              /* autoComplete={false} */
              /* value={uye.isim} */
              type="text"
              id="isim"
            />
          </p>
          <p>
            <label htmlFor="soyisim">Soyisim: </label>
            <input
              /*  onChange={handleInputChange} */
              /*  autoComplete={false} */
              /* value={uye.soyisim} */
              type="text"
              id="soyisim"
            />
          </p>
          <p>
            <label htmlFor="email">e-mail: </label>
            <input
              /* onChange={handleInputChange} */
              /* autoComplete={false} */
              /* value={uye.email} */
              type="text"
              id="email"
            />
          </p>
          <p>
            <label htmlFor="rol">Rol: </label>
            <input
              /* onChange={handleInputChange} */
              /* autoComplete={false} */
              /* value={uye.rol} */
              type="text"
              id="rol"
            />
          </p>
          <p>
            <label htmlFor="yas">Yaş: </label>
            <input
              /*  onChange={handleInputChange} */
              /* autoComplete={false} */
              /* value={uye.yas} */
              type="text"
              id="yas"
              size="5"
            />
          </p>
          <button type="button" onClick={handleClearForm}>
            Formu temizle
          </button>
          <button type="submit">Gönder</button>
        </fieldset>
      </form>
    </div>
  );
}
