import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxIcon, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Accordion1 = ({data,setData}) => {
  const handle2Change=(e)=>{
    const val=e.target.value
    if(e.target.isChecked){
      setData(data)
      return (e.target.isChecked=false)
    }else{
      e.target.isChecked=true
      e.target.icon=<Checkbox/>
      let new_Data=data.filter((ele)=>+(ele.price)<val)
      setData(new_Data)
    }
  }
  return (
    <>
    <Accordion allowMultiple>
    <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'md'} >
              Price
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox value={200} onChange={(e)=>handle2Change(e)} >Under $200</Checkbox>
          <Checkbox value={300} onChange={(e)=>handle2Change(e)} >Under $300</Checkbox>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>


  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'md'} >
              Color
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox  isDisabled >Yellow Styles</Checkbox>
          <Checkbox isDisabled>Blue Styles</Checkbox>
          <Checkbox isDisabled>Green Styles</Checkbox>
          <Checkbox isDisabled>Red Styles</Checkbox>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  


</Accordion>
    </>
  )
}

export default Accordion1

