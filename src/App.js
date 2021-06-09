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
    const { imgUrl, id, selectHandler } = this.props;
    return (
      <Container onClick={() => selectHandler(id)}>
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
    const { title, componentCardItems, selectHandler } = this.props;
    return (
      <>
        <table>
          <Title><td>{title}</td></Title>
          <tr>
            {componentCardItems.map(card => <ComponentCard imgUrl={card.imgUrl} id={card.id} selectHandler={selectHandler}/>)}
          </tr>
        </table>
      </>
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeadId: -1,
      selectedStemId: -1,
      selectedBackgroundId: -1,
    };

    this.handleSelectHead = this.handleSelectHead.bind(this);
    this.handleSelectStem = this.handleSelectStem.bind(this);
    this.handleSelectBackground = this.handleSelectBackground.bind(this);
  }

  handleSelectHead(id) {
    this.setState({
      selectedHeadId: id,
    })
  }

  handleSelectStem(id) {
    this.setState({
      selectedStemId: id,
    })
  }

  handleSelectBackground(id) {
    this.setState({
      selectedBackgroundId: id,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to mushroom builder</h1>
        <ComponentRow title="Select Head" componentCardItems={MushroomHeadsData} selectHandler={this.handleSelectHead}/>
        <ComponentRow title="Select Stem" componentCardItems={MushroomStemsData} selectHandler={this.handleSelectStem}/>
        <ComponentRow title="Select Background" componentCardItems={MushroomBackgroundData} selectHandler={this.handleSelectBackground}/>
      </div>
    );
  }
}

export default App;
