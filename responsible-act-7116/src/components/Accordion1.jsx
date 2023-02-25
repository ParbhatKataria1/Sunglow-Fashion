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
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
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
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
              Style
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
              Sleeve Length
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
              Length
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
              Occasion
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
              NeckLine
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
              Size
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
              Size Type
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton display={'flex'} justifyContent={'space-between'}>
            <Box as="span" flex='1' textAlign='left' fontSize={'small'} >
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </>
  )
}

export default Accordion1

