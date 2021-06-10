import './App.css';
import React from 'react';
import styled from 'styled-components';
import morelHeadImg from './img/morel-head.png';
import morelStemImg from './img/morel-stem.png';
import urbanImg from './img/bg-urban.png';

const Container = styled.div`
  display: inline-block;
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
        <Title><td>{title}</td></Title>
        <tr>
          {componentCardItems.map(card => <ComponentCard imgUrl={card.imgUrl} id={card.id} selectHandler={selectHandler}/>)}
        </tr>
      </>
    )
  }
}

const MushroomHeadsData = [
  {
    imgUrl: morelHeadImg,
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
    imgUrl: morelStemImg,
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
    imgUrl:urbanImg,
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

const AppTitle = styled.h1`
  padding-bottom: 0.5rem;
  padding-left: 3rem;
`;

const AppDiv = styled.div`
  display: inline-block;
`;

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
      <AppDiv>
        <AppTitle><td>welcome to mushroom builder</td></AppTitle>
        <div className="Selection">
          <ComponentRow title="select head" componentCardItems={MushroomHeadsData} selectHandler={this.handleSelectHead}/>
          <ComponentRow title="select stem" componentCardItems={MushroomStemsData} selectHandler={this.handleSelectStem}/>
          <ComponentRow title="select background" componentCardItems={MushroomBackgroundData} selectHandler={this.handleSelectBackground}/>
        </div>
        <div className="Result">
          <Title><td>{"your mushroom"}</td></Title>
          {this.state.selectedHeadId}
          <br/>
          {this.state.selectedStemId}
          <br/>
          {this.state.selectedBackgroundId}
        </div>
      </AppDiv>
    );
  }
}

export default App;
