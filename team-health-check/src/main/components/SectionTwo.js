import React from 'react';
import {Link} from 'react-router-dom';
import SectionDescription from '../SectionDescription';
import Title from '../Title';
import sectionData from '../../sectionData.json';
import SectionRow from './SectionRow';

const SectionTwo = props => {
  const sectionRows = sectionData.sectionData.sectionTwo.map(data => {
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
      <Title titleText='Team Members and Roles'/>
      <SectionDescription description={sectionData.sectionDescriptions.sectionTwo}/>
      {sectionRows}
      <div className='nav-links'>
        <Link to='/survey/section-one'>Previous Section</Link>
        <Link to='/survey/section-two'>Next Section</Link>
      </div>
    </div>
  )
};

export default SectionTwo;