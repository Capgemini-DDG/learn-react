import React from 'react';
import RadioOption from './RadioOption';

const SurveyFormOptions = props => {
  const {data, option, handleChange, sectionID} = props;

  return (
    <ul className='survey-form'>
      <li>
        <RadioOption 
          name={`red-${sectionID}`}
          value={`red-${sectionID}`}
          checked={option === `red-${sectionID}`}
          onChange={handleChange} 
          text={data.red} 
        />
      </li>
      <li>
        <RadioOption 
          name={`amber-${sectionID}`}
          value={`amber-${sectionID}`}
          checked={option === `amber-${sectionID}`}
          onChange={handleChange} 
          text={data.amber} 
        />
      </li>
      <li>
      <RadioOption 
          name={`green-${sectionID}`}
          value={`green-${sectionID}`}
          checked={option === `green-${sectionID}`}
          onChange={handleChange} 
          text={data.green} 
        />
      </li>
      <li>
        <label>
          <input 
            type='radio' 
            name={`n/a-${sectionID}`}
            value={`n/a-${sectionID}`}
            checked={option === `n/a-${sectionID}`}
            onChange={handleChange}  
          />
          N/A
        </label>
      </li>
    </ul>           
  )
};

export default SurveyFormOptions;