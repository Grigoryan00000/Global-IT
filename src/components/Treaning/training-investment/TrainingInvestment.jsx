import React from 'react'
import Container from '../../common/container/Container';
import "./TrainingInvestment.scss"

const TrainingInvestment = ({investmentData, currentId}) => {

    

    if(currentId === investmentData.faculties_Items){
        return (
          <div className='training-investment-background'>
              <Container>
                  <div className='training-investment'>
                      <div className="training-investment-text-side">
                          <h1>{investmentData.name}</h1>
                          <h2>{investmentData.text}</h2>
                      </div>
                      <div className="training-investment-button">
                          <div className='button'>{investmentData.but_name}</div>
                      </div>
                  </div>
              </Container>
          </div>
        )
    }
}

export default TrainingInvestment