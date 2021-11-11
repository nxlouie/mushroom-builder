import './App.css';
import React from 'react';
import styled from 'styled-components';
import morelHeadImg from './img/morel-head.png';
import morelStemImg from './img/morel-stem.png';
import sulfurHeadImg from './img/sulfur-head.png';
import sulfurStemImg from './img/sulfur-stem.png';
import flyHeadImg from './img/fly-head.png';
import flyStemImg from './img/fly-stem.png';
import maitakeHeadImg from './img/maitake-head.png';
import maitakeStemImg from './img/maitake-stem.png';
import spaceImg from './img/bg-space.png';
import urbanImg from './img/bg-urban.png';
import blankImg from './img/bg-blank.png';

const Container = styled.div`
  display: inline-block;
  border: 1px solide #c4c4c4;
  border-radius: 0.5rem;
  cursor: pointer;
  vertical-align: top;
  padding-left: 0.5rem;
`;
const ComponentImg = styled.img`
  border: 1px solid #000000;
  border-radius: 0.5rem;
  height: 6rem;
  object-fit: cover;
  width: 6rem;
`;
const HighlightedComponentImg = styled(ComponentImg)`
  border: 1px solid #ff80f4;
`;
const NewTag = styled.div`
  border: 1px solid #000000;
  border-radius: 0.5rem;
  background: yellow;
  padding: 2px;
  margin: 6px;
  display: inline-block;
`;

class ComponentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgUrl, id, selectHandler, shouldHighlight, designateNew } = this.props;
    let img;
    if (shouldHighlight) {
      img = <HighlightedComponentImg src= {imgUrl}/>
    } else {
      img = <ComponentImg src= {imgUrl}/>
    }
    return (
      <Container onClick={() => selectHandler(id)}>
        <div>
          {designateNew ? <NewTag>new!</NewTag> : <div>&nbsp;</div>}
          <br></br>
          {img}
        </div>

      </Container>
    )
  }
}

const Title = styled.h2`
  padding-left: 3rem;
`;

class ComponentRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, componentCardItems, selectHandler, selectedId } = this.props;
    return (
      <>
        <Title>{title}</Title>
        <div>
          {componentCardItems.map(card => <ComponentCard imgUrl={card.imgUrl} id={card.id} selectHandler={selectHandler} shouldHighlight={card.id === selectedId} designateNew={card.new}/>)}
        </div>
      </>
    )
  }
}

const MushroomHeadsData = [
  {
    imgUrl: maitakeHeadImg,
    id: 9,
    name: 'Grifola',
    new: true,
  },
  {
    imgUrl: morelHeadImg,
    id:0,
    name:'Morchella',
  },
  {
    imgUrl: sulfurHeadImg,
    id:1,
    name:'Hypholoma',
  },
  {
    imgUrl: flyHeadImg,
    id:2,
    name:'Amanita',
  },
]

const MushroomStemsData = [
  {
    imgUrl: maitakeStemImg,
    id:10,
    name: 'frondosa',
    new: true,
  },
  {
    imgUrl: morelStemImg,
    id:3,
    name: 'tridentina',
  },
  {
    imgUrl: sulfurStemImg,
    id:4,
    name: 'fasciculare',
  },
  {
    imgUrl: flyStemImg,
    id:5,
    name: 'muscaria',
  },
]

const MushroomBackgroundData = [
  {
    imgUrl: urbanImg,
    id:6,
    name: 'urbana',
  },
  {
    imgUrl: spaceImg,
    id:7,
    name: 'stellaris',
  },
  {
    imgUrl: blankImg,
    id:8,
    name: 'niveus',
  },
]

const ResultContainer = styled.div`
  padding-left: 3rem;
`;
const OverlayContainer = styled.div`
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
    var name = '';
    if(selectedHeadId !== null) {
      chosenHeadObj = MushroomHeadsData.filter(obj => {return obj.id === selectedHeadId})[0];
      name = name.concat(chosenHeadObj.name);
    }
    if(selectedStemId !== null) {
      chosenStemObj = MushroomStemsData.filter(obj => {return obj.id === selectedStemId})[0];
      name = name.concat(" " + chosenStemObj.name);
    }
    if(selectedBackgroundId !== null) {
      chosenBgObj = MushroomBackgroundData.filter(obj => {return obj.id === selectedBackgroundId})[0];
      name = name.concat(" " + chosenBgObj.name);
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
      <>
      <Title>{"your mushroom"}</Title>
      <ResultContainer>
        <p>{name}</p>
        {Overlay} <br/>
        {chosenHeadObj !== null && chosenStemObj !== null && chosenBgObj !== null && <p>happy birthday Lisa 🙂</p>}
      </ResultContainer>
      </>
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
          <ComponentRow title="select head" componentCardItems={MushroomHeadsData} selectHandler={this.handleSelectHead} selectedId={this.state.selectedHeadId}/>
          <ComponentRow title="select stem" componentCardItems={MushroomStemsData} selectHandler={this.handleSelectStem} selectedId={this.state.selectedStemId}/>
          <ComponentRow title="select background" componentCardItems={MushroomBackgroundData} selectHandler={this.handleSelectBackground} selectedId={this.state.selectedBackgroundId}/>
        </div>
        <ResultMushroom selectedHeadId={this.state.selectedHeadId} selectedStemId={this.state.selectedStemId} selectedBackgroundId={this.state.selectedBackgroundId}/>
      </AppDiv>
    );
  }
}

export default App;
