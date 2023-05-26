import React, { Suspense } from "react";

import Button from "remote";

const App = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Button />
    </Suspense>
  );
};

export default App;
