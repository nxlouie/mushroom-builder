import './App.css';
import React from 'react';
import styled from 'styled-components';

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

class ComponentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgUrl } = this.props;
    return (
      <Container>
        <ComponentImg src= {imgUrl}>
        </ComponentImg>
      </Container>
    )
  }
}

const Title = styled.h2`
  padding-bottom: 0.5rem;
  padding-left: 3rem;
`;

class ComponentRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { componentCardItems } = this.props;
    return (
      <>
        <Title><td>hey</td></Title>
        <tr>
          {componentCardItems.map(card => <ComponentCard imgUrl={card.imgUrl}/>)}
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



const MushroomHeadsData = [
  {
    imgUrl:'https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg',
    id:0,
  },
  {
    imgUrl:'https://media.npr.org/assets/img/2018/02/02/enoki-promo_wide-5f65ced60025d4ef144f006496ccf5d00ca04021-s600-c85.webp',
    id:1,
  },
  {
    imgUrl:'https://civileats.com/wp-content/uploads/2021/03/210311-doug-bierend-mycotopia-mushrooms-fungi-climate-local-food-nutrition-6-king-bolete-credit-bernard-spragg.jpg',
    id:2,
  },
]

const MushroomStemsData = [
  {
    imgUrl:'https://devour.asia/wp-content/uploads/2020/01/fungus-1194380_1280.jpg',
    id:3,
  },
  {
    imgUrl:'https://devour.asia/wp-content/uploads/2020/01/fungus-1194380_1280.jpg',
    id:4,
  },
  {
    imgUrl:'https://devour.asia/wp-content/uploads/2020/01/fungus-1194380_1280.jpg',
    id:5,
  },
]

const MushroomBackgroundData = [
  {
    imgUrl:'https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg',
    id:6,
  },
  {
    imgUrl:'https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg',
    id:7,
  },
  {
    imgUrl:'https://media.nature.com/w700/magazine-assets/d41586-019-03614-0/d41586-019-03614-0_17409632.jpg',
    id:8,
  },
]


function App() {
  return (
    <div className="App">
      <h1>Welcome to mushroom builder</h1>
      <ComponentRow componentCardItems={MushroomHeadsData}/>
      <ComponentRow componentCardItems={MushroomStemsData}/>
      <ComponentRow componentCardItems={MushroomBackgroundData}/>
      <MetadataForm/>
    </div>
  );
}

export default App;
