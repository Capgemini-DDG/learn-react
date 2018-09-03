import React from 'react';
import SurveyForm from './surveyform/SurveyForm';

const SectionRow = props => {
 
  const {sectionID, sectionData, handleUpdate, rowData} = props;

  const handleChange = event => {

    const sectionID = props.sectionID;
    const option = event.target.value;
    let score = 0;

    if(option === `red-${sectionID}`) {
      score = 3;
    } else if(option === `amber-${sectionID}`) {
      score = 7;
    } else if(option === `green-${sectionID}`) {
      score = 10;
    }

    const sectionData = { sectionID: sectionID, option: option, score: score}

    handleUpdate(score, sectionID, sectionData)
  }

  let option = '';
  let score = 0;
  if(sectionData) {
    option = sectionData.get(sectionID) && sectionData.get(sectionID).option;
    score = sectionData.get(sectionID) && sectionData.get(sectionID).score;
  }

  return (
    <div className='row'>
      <SurveyForm 
        handleChange={handleChange}
        option={option}
        data={rowData}
        score={score}
        sectionID={sectionID}  
        addComments={option === `n/a-${sectionID}`}  
      />
    </div>
  )
};

export default SectionRow;