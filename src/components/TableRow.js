import React from 'react'

const TableRow = ({name, time, rate}) => {
  return (
    <tr>
        <td>{name}</td>
        <td className='td-center'>{(time * 1).toFixed(2)}&nbsp;h</td>
        <td className='td-center'>{(rate * 1).toFixed(2)}&nbsp;€/h</td>
        <td className='td-right'>{(time * rate).toFixed(2)}&nbsp;€</td>
    </tr>
  )
}

export default TableRow