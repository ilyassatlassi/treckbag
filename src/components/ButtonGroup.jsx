import React from 'react'
import Button from './Button'

function ButtonGroup() {
    const secondaryButtons = [
        {
          text: "Mark all as complete",
        //   onClick: markAllAsComplete,
        },
        {
          text: "Mark all as incomplete",
        //   onClick: markAllAsIncomplete,
        },
        {
          text: "Reset to initial",
        //   onClick: resetToInitial,
        },
        {
          text: "Remove all items",
        //   onClick: removeAllItems,
        }
      ];
  return (
    <section className='button-group'>
       {secondaryButtons.map((button) => (
        <Button
          key={button.text}
          children={button.text}
        //   onClick={button.onClick}
          buttonType="secondary"
        />
      ))}
    </section>
  )
}

export default ButtonGroup