import React from 'react';
import {Link} from 'react-router-dom';
import SectionDescription from '../SectionDescription';
import Title from '../Title';
import sectionData from '../../sectionData.json';
import SectionRow from './SectionRow';

const SectionOne = props => {
  const sectionRows = sectionData.sectionData.sectionOne.map(data => {
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
    <div>
      <Title titleText='Team Identity and Purpose'/>
      <SectionDescription description={sectionData.sectionDescriptions.sectionOne}/>
      {sectionRows}
      <Link to='/survey/section-two'>Next Section</Link>       
    </div>
  )
};

export default SectionOne;