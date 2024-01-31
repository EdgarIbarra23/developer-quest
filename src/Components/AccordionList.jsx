import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Tooltip, Typography } from '@mui/material'
import { MdExpandMore } from "react-icons/md";

export const AccordionList = ({ expandedText, title, contents }) => {
    return contents.length === 0 ? null : (
        <Accordion>
            <AccordionSummary
                expandIcon={<MdExpandMore className='text-white text-[30px] font-bold'/>}
                aria-controls={`${expandedText}d-content`}
                id={`${expandedText}d-header`}
                style={{backgroundColor: '#242F40', color: 'white'}}>
                <Typography style={{fontSize: '20px', fontWeight: 'bold'}}>{title}</Typography>
            </AccordionSummary>

            <AccordionDetails >
                <Typography className='flex justify-start items-center flex-wrap gap-5'>
                    {
                        contents.map(content => <Tooltip key={content.name} title={content.name}><img src={content.logo} alt={content.name} className='w-[40px]'/></Tooltip>)
                    }
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

