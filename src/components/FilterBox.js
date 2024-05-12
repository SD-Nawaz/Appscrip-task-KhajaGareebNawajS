import React, {useState} from 'react'
import {filters} from '../utils'

const Filter = ({handleFilterCategory}) => {
  const [dropdownVisible, setDropdownVisible] = useState(-1)
  const [unchecked, setunchecked] = useState(-1)


  const handlechange = (e, id) => {
    if (e.target.name === 'Men' && e.target.checked) {
      handleFilterCategory(e.target.name, 'addmenproducts')
      setunchecked(id)
    } else if (e.target.name === 'Men' && e.target.checked === false) {
      handleFilterCategory(e.target.name, 'removemenproducts')
      setunchecked(id)
    } else if (e.target.name === 'Women' && e.target.checked) {
      handleFilterCategory(e.target.name, 'addwomenproducts')
      setunchecked(id)
    } else if (e.target.name === 'Women' && e.target.checked === false) {
      handleFilterCategory(e.target.name, 'removewomenproducts')
      setunchecked(id)
    }
  }

  const handleDropdown = index => {
    if (dropdownVisible === index) {
      setDropdownVisible(-1)
    } else {
      setDropdownVisible(index)
    }
  }

  const handleUnselectAll = () => {
    Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(
      el => (el.checked = false),
    )
    handleFilterCategory('All')
    setunchecked(-1)
  }
  
  const uncheckedinput = index => {
    if (unchecked === index) {
      setunchecked(-1)
    } else {
      setunchecked(index)
    }
  }


  
  return (
    <div className='filtercontainer'>
      <div className='borderBox padV15 customizable'>
        <input type='checkbox' name='' id='custom' />
        <label htmlFor='custom'>customizable</label>
      </div>
      <div className='filterTypesContainer'>
        {filters.map((item, index) => (
          <div className='borderBox dropdown padV15' key={index}>
            <div onClick={() => handleDropdown(item.id)} className='heading'>
              <p style={{cursor: 'pointer'}}>{item.type}</p>
              {dropdownVisible === item.id ? (
                <span>
                  {' '}
                  <svg
                    width='12'
                    height='6'
                    viewBox='0 0 12 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.519028 5.42907L5.03114 0.918544C5.56401 0.38586 6.43598 0.38586 6.96886 0.918544L11.481 5.42907'
                      stroke='#292D32'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg
                    onClick={() => {
                      handleDropdown(item.id)
                    }}
                    width='12'
                    height='6'
                    viewBox='0 0 12 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.51909 0.51902L5.03118 5.03111C5.56405 5.56398 6.43601 5.56398 6.96888 5.03111L11.481 0.51902'
                      stroke='#292D32'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>{' '}
                </span>
              )}
            </div>
            <div className='selectedOption'>
              {item.id != unchecked && <p className='all_para'>All</p>}
              <div
                className={`${
                  dropdownVisible === item.id ? 'showDropDown' : 'hideDropDown'
                }`}
              >
                <p onClick={handleUnselectAll}>Unselect all</p>
                <div className='optionsContainer'>
                  {item?.options?.map((option, index) => (
                    <div className='type-optionCont' key={index}>
                      <input
                        type='checkbox'
                        name={option}
                        id='type-option'
                        onChange={e => {
                          handlechange(e, item.id)
                          uncheckedinput(item.id)
                        }}
                      />
                      <label htmlFor='type-option'>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter
