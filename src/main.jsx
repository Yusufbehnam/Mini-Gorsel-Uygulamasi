import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import '@picocss/pico'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

/*
   Yapılıcak İşlemler:
- [x] Pico CSS kullanılıcak
- [x] Ana görsel olacak
- [x] Hemen altta 5 adet küçük görsel olacak
- [x] Küçük görsellerden birine tıklanınca ana görsel değişicek
- [x] Görseller Lorem Picsum'dan gelecek
- [x] Default olarak 100 no'lu id seçilicek
- [x] Görseller array olarak [200,201,202,203,204]

*/
