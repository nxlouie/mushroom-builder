import './App.css';
import React from 'react';
import styled from 'styled-components';
import morelHeadImg from './img/morel-head.png';
import morelStemImg from './img/morel-stem.png';
import sulfurHeadImg from './img/sulfur-head.png';
import sulfurStemImg from './img/sulfur-stem.png';
import flyHeadImg from './img/fly-head.png';
import flyStemImg from './img/fly-stem.png';
import spaceImg from './img/bg-space.png';
import urbanImg from './img/bg-urban.png';
import blankImg from './img/bg-blank.png';

const Container = styled.div`
  display: inline-block;
  border: 1px solide #c4c4c4;
  border-radius: 0.5rem;
  cursor: pointer;
  vertical-align: top;
  padding-left: 3rem;
`;
const ComponentImg = styled.img`
  border: 1px solid #000000;
  border-radius: 0.5rem;
  height: 7rem;
  object-fit: cover;
  width: 7rem;
`;

class ComponentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgUrl, id, selectHandler } = this.props;
    return (
      <Container onClick={() => selectHandler(id)}>
        <ComponentImg src= {imgUrl}/>
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
        <td><Title>{title}</Title></td>
        <div>
          {componentCardItems.map(card => <ComponentCard imgUrl={card.imgUrl} id={card.id} selectHandler={selectHandler}/>)}
        </div>
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
    imgUrl: sulfurHeadImg,
    id:1,
  },
  {
    imgUrl: flyHeadImg,
    id:2,
  },
]

const MushroomStemsData = [
  {
    imgUrl: morelStemImg,
    id:3,
  },
  {
    imgUrl: sulfurStemImg,
    id:4,
  },
  {
    imgUrl: flyStemImg,
    id:5,
  },
]

const MushroomBackgroundData = [
  {
    imgUrl: urbanImg,
    id:6,
  },
  {
    imgUrl: spaceImg,
    id:7,
  },
  {
    imgUrl: blankImg,
    id:8,
  },
]

const OverlayContainer = styled.div`
  padding-left: 6rem;
  position: relative;
  display: inline;
`;
const BaseOverlayComponentImg = styled(ComponentImg)`
  height: 14rem;
  width: 14rem;
`;
const OverlayComponentImg = styled(ComponentImg)`
  border: 0px;
  height: 14rem;
  width: 14rem;
  position: absolute;
  bottom: 0;
  right: 0;
`;

class ResultMushroom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {selectedHeadId, selectedStemId, selectedBackgroundId } = this.props;
    var chosenHeadObj = null;
    var chosenStemObj = null;
    var chosenBgObj = null;

    if(selectedHeadId !== null) {
      chosenHeadObj = MushroomHeadsData.filter(obj => {return obj.id === selectedHeadId})[0];
    }
    if(selectedStemId !== null) {
      chosenStemObj = MushroomStemsData.filter(obj => {return obj.id === selectedStemId})[0];
    }
    if(selectedBackgroundId !== null) {
      chosenBgObj = MushroomBackgroundData.filter(obj => {return obj.id === selectedBackgroundId})[0];
    }
    let Overlay;
    if(selectedHeadId === 1) {
      Overlay = <OverlayContainer>
        {chosenHeadObj !== null && <OverlayComponentImg src= {chosenHeadObj.imgUrl}/>}
        {chosenStemObj !== null && <OverlayComponentImg src= {chosenStemObj.imgUrl}/>}
        {chosenBgObj !== null && <BaseOverlayComponentImg src={chosenBgObj.imgUrl}/>}
      </OverlayContainer>;
    } else {
      Overlay = <OverlayContainer>
        {chosenStemObj !== null && <OverlayComponentImg src= {chosenStemObj.imgUrl}/>}
        {chosenHeadObj !== null && <OverlayComponentImg src= {chosenHeadObj.imgUrl}/>}
        {chosenBgObj !== null && <BaseOverlayComponentImg src={chosenBgObj.imgUrl}/>}
      </OverlayContainer>;
    }

    return (
      <div className="Result">
      <td><Title>{"your mushroom"}</Title></td>
      {Overlay}
    </div>
    );
  }
}

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
      selectedHeadId: null,
      selectedStemId: null,
      selectedBackgroundId: 8,
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
        <AppTitle>welcome to mushroom builder</AppTitle>
        <div className="Selection">
          <ComponentRow title="select head" componentCardItems={MushroomHeadsData} selectHandler={this.handleSelectHead}/>
          <ComponentRow title="select stem" componentCardItems={MushroomStemsData} selectHandler={this.handleSelectStem}/>
          <ComponentRow title="select background" componentCardItems={MushroomBackgroundData} selectHandler={this.handleSelectBackground}/>
        </div>
        <ResultMushroom selectedHeadId={this.state.selectedHeadId} selectedStemId={this.state.selectedStemId} selectedBackgroundId={this.state.selectedBackgroundId}/>
      </AppDiv>
    );
  }
}

export default App;
