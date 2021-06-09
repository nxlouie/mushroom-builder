import './App.css';
import React from 'react';
import styled from 'styled-components';

class ComponentCard extends React.Component {


  render() {
    const Container = styled.td`
      border: 1px solide #c4c4c4;
      border-radius: 0.5rem;
      cursor: pointer;
      vertical-align: top;
      padding-left: 3rem;
    `;
    const ComponentImg = styled.img`
      height: 11rem;
      object-fit: cover;
      width: 14rem;
    `;
    return (
      <Container>
        <ComponentImg src='https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg'>
        </ComponentImg>
      </Container>
    )
  }
}

class ComponentRow extends React.Component {
  render() {
    const Title = styled.h2`
      padding-bottom: 0.5rem;
      padding-left: 3rem;
    `;
    return (
      <>
        <Title><td>hey</td></Title>
        <tr>
          <ComponentCard/>
          <ComponentCard/>
          <ComponentCard/>
        </tr>
      </>
    )
  }
}

class MetadataForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <input type="text" />
            <br />
            <textarea />
            <br />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <h1>Welcome to mushroom builder</h1>
      <ComponentRow/>
      <ComponentRow/>
      <ComponentRow/>
      <MetadataForm/>
    </div>
  );
}

export default App;
