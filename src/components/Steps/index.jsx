import React from 'react'
import { CurrentStep, Step } from './styles'
import UserIcon from '../Icons/UserIcon'
import AddressIcon from '../Icons/AddressIcon'
import AboutIcon from '../Icons/AboutIcon'

const Steps = ({ currentStep }) => {
  return (
    <Step>
      <CurrentStep active={currentStep === 0 ? false : true}>
        <UserIcon />
      </CurrentStep>
      <CurrentStep active={currentStep >= 2 ? true : false}>
        <AddressIcon />
      </CurrentStep>
      <CurrentStep active={currentStep > 2 ? true : false}>
        <AboutIcon />
      </CurrentStep>
    </Step>
  )
}

export default Steps
