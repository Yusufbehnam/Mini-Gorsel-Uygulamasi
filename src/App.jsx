import { useState } from "react";

function App() {
  const pictureIDs = [200,201,202,203,204]
  const [imageId, setImageId] = useState(pictureIDs[0]);


  const getLoremPicsumImage = (id, width = 800, height = 450) =>
    `https://picsum.photos/id/${id}/${width}/${height} `;

  function handleClick(id) {
    setImageId(id)
  }
  

  return (
    <main className="container">
      <hgroup>
        <h2>Mini Gorsel Uygulaması v1</h2>
        <h3>Gorsel:</h3>
      </hgroup>
      <img
        src={getLoremPicsumImage(imageId)}
        alt=""
        style={{ widows: "100%" }}
      />
      <div
        className="grid"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop :"30px"
        }}
      >
        {pictureIDs.map((item, index) => (
          <div key={index}>
            <img 
            onClick={() =>handleClick(item)}
            src={getLoremPicsumImage(item, 100, 100)}
             alt="" 
             />
          </div>
        ))} 





        {/* 
        5 adet gorsel render etmek için kullandık
        {[...Array(5)].map((item, index) => (
          <div key={index}>
            <img src={getLoremPicsumImage(200 + index, 100, 100)}
             onClick={() =>handleClick(200+index)}
             alt="" 
             />
          </div>
        ))} */}
        {/* 
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div> */}
      </div>
    </main>
  );
}

export default App;
