import React from 'react';
import SurveySectionScore from './SurveySectionScore';
import SurveyFormOptions from './SurveyFormOptions';
import CommentBox from './CommentBox';

const SurveyForm = props => {

  const {option, handleChange, data, score, sectionID, addComments} = props;

  return (
    <div className='form-section'>
      <h3>{data.id} {data.attribute}</h3>
      <div className='column'>
        <SurveyFormOptions
          data={data}
          option={option}
          handleChange={handleChange}
          sectionID={sectionID}
        />
      </div>
      <div className='column'>
        {addComments && <CommentBox/>}
        <SurveySectionScore score={score}/>
      </div>
    </div>
  )
}

export default SurveyForm;