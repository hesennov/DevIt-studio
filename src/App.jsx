import React from "react";
import Container from "./components/lib/Container/Container";
import Navigation from "./constants/navigation";

const App = () => {
  return (
    <>
      <Container>
        <Navigation />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Container>
    </>
  );
};
export default App;
