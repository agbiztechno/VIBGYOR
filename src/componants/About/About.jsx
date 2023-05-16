import React from 'react';
import './Style/About.css';
import OurHistory from './Componant/OurHistory';
import OurAchievements from './Componant/OurAchievements';
import OurDedications from './Componant/OurDedications';
import OurBranches from './Componant/OurBranches';
import OurAchievement from './Content/OurAchievement';
import Our_History from './Content/OurHistory';
import OurBranch from './Content/OurBranch';
import OurDedication from './Content/OurDedication';

const About = () => {
  return (
    <div className='About'>
      <OurHistory data={Our_History}/>
      <OurDedications data={OurDedication}/>
      <OurAchievements data={OurAchievement}/>
      <OurBranches data={OurBranch}/>
    </div>
  )
}

export default About