import React, { Component } from 'react';

import CircleGraph from './graph/CircleGraph';
import LineGraph from './graph/LineGraph';
import LongGraph from './graph/LongGraph';
import Number from './graph/Number';
import Picture from './graph/Picture';
import Widget from './graph/Widget';

class Dashboard extends Component {
  render() {
    const CaloricConsumption = {
      image: 'fa fa-user', 
      main: '5,869,724',
      suffix: 'kcal', 
      subtext: 'TOTAL ENG. CONSUMPTION',
      consumptions: []
    }
    const ContentNumbers = [
      {
          image: 'fa fa-thermomenter-empty',
          main: '48',
          suffix: 'bpm',
          subtext: 'TEMPERATURE',
          col: 4 
      }
    ]
    const ContentPictures = [
       { col: 2, image: 'fab fa-xing', subtext: 'PHOTOSYNTHESIS'},
       { col: 2, image: 'fas fa-bolt', subtext: 'GLYCOLISIS'},
       { col: 2, image: 'fas fa-stethoscope', subtext: 'RESPIRATION'},
       { col: 2, image: 'fab fa-dribbble', subtext: 'CHEMOSYNTH'},
     ]

     const ContentLineGraphs = [
       {col: 3, image: 'fa fa-thermometer-empty', main: '48', suffix: '%', subtext:'MUSCLE PERCENTAGE'},
       {col: 3, image: 'fa fa-heartbeat', main: '98', suffix: '%', subtext:'WATER PERCENTAGE'},
       {col: 3, image: 'fa fa-cuttlery', main: '61', suffix: 'kg', subtext:'BODY WEIGHT'},
       {col: 3, image: 'fa fa-user', main: '16', suffix: '%', subtext:'FAT PERCENTAGE'},
       {col: 3, image: 'fa fa-database', main: '680', suffix: 'kcal', subtext: 'AVG. CONSUMPTION'},
       {col: 3, image: 'fa fa-clock-o', main: '', suffix: 'Hrs', subtext:'SLEEP'}
     ]

     const CircleGraphs = [
       {col: 3, main: 'Protein', subtext: '' },
       {col: 3, main: 'Calories', subtext: '', percent: parseFloat((this.props.data.find(e => e.nutrientId == '208').value / 3200).toFixed(2) )},
       {col: 2, main: 'Mg', subtext: 'STRENGHT'},
       {col: 2, main: 'Zn', subtext: 'MUSCLES'},
       {col: 2, main: 'H20', subtext: 'GENERAL'},
       {col: 2, main: 'Ca', subtext: 'BONES & TEETH'},
       {col: 2, main: 'K', subtext: 'BlOOD PRESSURE'},
       {col: 2, main: 'Fe', subtext: 'OXYGEN'},
       {col: 2, main: 'A', subtext: 'SKIN'},
       {col: 2, main: 'B1', subtext: 'ENERGY'},
       {col: 2, main: 'B2', subtext: 'TISSUES'},
       {col: 2, main: 'B6', subtext: 'NERVOUS/ENERGY'},
       {col: 2, main: 'B12', subtext: 'NERVOUS SYSTEM'},
       {col: 2, main: 'C', subtext: 'GROWTH HORMONE'},
       {col: 2, main: 'D', subtext: 'TEETH & BONES'},
       {col: 2, main: 'E', subtext: 'CELL PROTECTION'},
       {col: 2, main: 'Vit K', subtext: 'INFLAMMATION'},
       {col: 2, main: 'FOLATE', subtext: 'ABSORBTION'},
       {col: 2, main: 'Gl', subtext: 'ENERGY'},
       {col: 2, main: 'Chol', subtext: 'ABSORBTION'}
     ]

    return (
      <div className="dashboard grid-12 gap-0">
        <Widget col={ 4 } theme="dark">
        <Number {...ContentNumbers[0] }/>
        </Widget>
        <Widget col={ 2 } theme="light">
        <Picture {...ContentPictures[0] }/>
        </Widget>
        <Widget col={ 2 } theme="light">
        <Picture {...ContentPictures[1] }/>
        </Widget>
        <Widget col={ 2 } theme="light">
        <Picture {...ContentPictures[2] }/>
        </Widget>
        <Widget col={ 2 } theme="light">
        <Picture {...ContentPictures[3] }/>
        </Widget>
        <Widget col={ 3 } theme="dark">
        <LineGraph {...ContentLineGraphs[0]}/>
        </Widget>
        <Widget col={ 3 } theme="dark">
        <LineGraph {...ContentLineGraphs[1]}/>
        </Widget>
        <Widget col={ 3 } theme="dark">
        <CircleGraph {...CircleGraphs[0]}/>
        </Widget>
        <Widget col={ 3 } theme="dark">
        <CircleGraph {...CircleGraphs[1]}/>
        </Widget>
        <Widget col={ 3 } theme="dark">
        <LineGraph {...ContentLineGraphs[2]}/>
        </Widget>
        <Widget col={ 3 } theme="dark">
        <LineGraph {...ContentLineGraphs[3]}/>
        </Widget>
        <Widget col={ 3 } theme="light">
        <LineGraph {...ContentLineGraphs[4]}/>
        </Widget>
        <Widget col={ 3 } theme="dark">
        <LineGraph {...ContentLineGraphs[5]}/>
        </Widget>
        <Widget col={ 12 } theme="light">
        <LongGraph {...CaloricConsumption}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[2]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[3]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[4]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[5]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[6]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[7]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[8]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[9]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[10]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[11]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[12]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[13]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[14]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[15]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[16]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[17]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[18]}/>
        </Widget>
        <Widget col={ 2 } theme="dark">
        <CircleGraph {...CircleGraphs[19]}/>
        </Widget>
      </div>
    )
  }
}

export default Dashboard;
