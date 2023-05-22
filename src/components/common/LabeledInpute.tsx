import React from 'react'

export const LabeledInpute = (props:any) => {
  return (
      <div className="mic-sec">
          <label htmlFor="fname">{props.label}</label>
          <input type={props.type ? props.type : "text"} id="fname" />
      </div>
  )
}

export const LabeledDropdown = (props:any) => {
    return (
        <div className="mic-sec">
            <label htmlFor="fname">{props.label}</label>
            <select name="" id="">
                <option value="opt 1">opt 2</option>
                <option value="opt 2">opt 2</option>
            </select>
        </div>
    )
  }

