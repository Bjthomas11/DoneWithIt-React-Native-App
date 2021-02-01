import React, { useState } from "react";
import AppScreen from "./app/components/AppScreen/AppScreen";

import AppImageInputList from "./app/components/AppImageListInput/AppImageInputList";

const App = () => {
  const [imageURIs, setImageURIs] = useState([]);

  const handleAdd = uri => {
    setImageURIs([...imageURIs, uri])
  }

  const handleRemove = uri => {
    setImageURIs(imageURIs.filter(imageURI => imageURI !== uri))
  }
  

  return (
    <AppScreen>
      <AppImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </AppScreen>
  );
};

export default App;
