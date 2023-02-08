import { useState } from "react";

export default function Form(props) {
  const { handleSubmitCallBack } = props;
  const [data, setData] = useState({
    isim: "",
    soyisim: "",
    email: "",
    rol: "",
    yas: "",
  });

  function changeHandlerName(e) {
    const { value, name } = e.target;

    const yeniData = {
      ...data,
      [name]: value,
    };
    setData(yeniData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    return handleSubmitCallBack(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Üye Ekleme</legend>
          <p>
            <label>
              İsim:
              <input
                onChange={changeHandlerName}
                type="text"
                id="fisim"
                name="isim"
                value={data.isim}
              />
            </label>
          </p>
          <p>
            <label>
              Soyisim:
              <input
                onChange={changeHandlerName}
                type="text"
                id="fsoyisim"
                name="soyisim"
                value={data.soyisim}
              />
            </label>
          </p>
          <p>
            <label>
              e-mail:
              <input
                onChange={changeHandlerName}
                type="text"
                id="femail"
                name="email"
                value={data.email}
              />
            </label>
          </p>
          <p>
            <label>Rol: </label>
            <input
              onChange={changeHandlerName}
              type="text"
              id="frol"
              name="rol"
              value={data.rol}
            />
          </p>
          <p>
            <label>
              Yaş:
              <input
                onChange={changeHandlerName}
                type="text"
                id="fyas"
                name="yas"
                size="5"
                value={data.yas}
              />
            </label>
          </p>

          <button type="submit">Gönder</button>
        </fieldset>
      </form>
    </div>
  );
}
