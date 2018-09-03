import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';

class SectionContainer extends Component {

  state = {
    sectionData: new Map(),
    scoreData: new Map() 
  }

  handleUpdate = (score, sectionId, sectionData) => {    
    this.setState((prevState) => ({
      sectionData: prevState.sectionData.set(sectionData.sectionID, {option: sectionData.option, score: sectionData.score}),
      scoreData: prevState.scoreData.set(sectionId, score)
    }))
  }

  render() {

    let totalScore;
    if(this.state.scoreData.size) {
      const mapValues = Array.from(this.state.scoreData.values());
      totalScore = mapValues.reduce((prevScore, currScore) => prevScore + currScore);
    }
    
    return(
      <div>
        <Switch>
          <Route path='/survey/section-one' component={props => <SectionOne {...props} handleUpdate={this.handleUpdate} sectionData={this.state.sectionData}/>}/>
          <Route path='/survey/section-two' component={props => <SectionTwo {...props} handleUpdate={this.handleUpdate} sectionData={this.state.sectionData}/>}/>
        </Switch>
        <p id='total-score'>Total Score: {totalScore > 0 ? totalScore : 0}</p>
      </div>
    )
  }
};

export default SectionContainer;
