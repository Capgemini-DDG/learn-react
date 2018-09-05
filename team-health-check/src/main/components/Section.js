import React from 'react';
import {Link} from 'react-router-dom';
import Title from '../Title';
import SectionDescription from '../SectionDescription';
import SectionRow from './SectionRow';

const Section = props => {

  const {healthCheckData, nextSectionId, previousSectionId} = props;

  const sectionRows = healthCheckData.questions.map(data => {
    return (
      <SectionRow 
        key={data.id}  
        rowData={data}
        sectionID={data.id}     
        handleUpdate={props.handleUpdate}  
        sectionData={props.sectionData}
      />
    )
  })

  return (
    <div className='section'>
      <Title titleText={healthCheckData.title}/>
      <SectionDescription description={healthCheckData.description}/>
      {sectionRows}
      {previousSectionId !== -1 && <Link to={`/survey/${previousSectionId}`}>PreviousSection</Link>}
      {nextSectionId !== -1 && <Link to={`/survey/${nextSectionId}`}>Next Section</Link>}
    </div>
  )
};

export default Section;