import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Section from '../components/Section';
import teamHealthCheckData from '../../sectionData.json';

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
    
    const routesToRender = teamHealthCheckData.sectionData.map((section, index) => {    
      let nextSectionId;      
      if(index < teamHealthCheckData.sectionData.length - 1) {
        nextSectionId = teamHealthCheckData.sectionData[index + 1].id
      } else {
        nextSectionId = -1;
      }

      let previousSectionId = index !== 0 ? teamHealthCheckData.sectionData[index - 1].id : -1;

      return (
        <Route
          key={section.id} 
          path={`/survey/${section.id}`} 
          component={props => 
            <Section {...props} 
              healthCheckData={section} 
              nextSectionId={nextSectionId} 
              previousSectionId={previousSectionId}
              handleUpdate={this.handleUpdate} 
              sectionData={this.state.sectionData}
            />
          }
        />
      )
    })

    return(
      <div>
        <Switch>
          {routesToRender}
        </Switch>
        <p id='total-score'>Total Score: {totalScore > 0 ? totalScore : 0}</p>
      </div>
    )
  }
};

export default SectionContainer;
