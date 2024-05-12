import React, {useEffect, useState} from 'react'
import FilterBox from './FilterBox'
import Recommended from './Recommended'

const ProductBody = () => {
  const [isFilterHidden, setisFilterHidden] = useState(true)
  const [retainAllProducts, setRetainAllProducts] = useState([])
  const [allProducts, setallProducts] = useState([])
  const [recommended, setRecommended] = useState(false)
  const [recommBY, setRecommBy] = useState(' ')
  const [svgColor, setSvgColor] = useState('none')
  const [recommTitle, setRecommTitle] = useState('RECOMMENDED')


  const handleFilterCategory = (category, option) => {
    if (category == 'Men' && option === 'addmenproducts') {
      let products = [...retainAllProducts]
      let filtered = products.filter(e => {
        return e.category === "men's clothing"
      })
      setallProducts(filtered)
    } else if (category == 'Men' && option === 'removemenproducts') {
      let products = [...retainAllProducts]
      let filtered = products.filter(e => {
        return e.category !== "men's clothing"
      })
      setallProducts(filtered)
    } else if (category == 'Women' && option === 'addwomenproducts') {
      let products = [...retainAllProducts]
      let filtered = products.filter(e => {
        return e.category === "women's clothing"
      })
      setallProducts(filtered)
    } else if (category == 'Women' && option === 'removewomenproducts') {
      let products = [...retainAllProducts]
      let filtered = products.filter(e => {
        return e.category !== "women's clothing"
      })
      setallProducts(filtered)
    } else if (category == 'All') {
      setallProducts([...retainAllProducts])
    }
  }
  
  const handleFilter = () => {
    setisFilterHidden(!isFilterHidden)
  }
  const handleSvgColor = () => {
    const changedcolor = svgColor === 'none' ? '#EB4C6B' : 'none'
    
  }

  

  useEffect(() => {
    async function getProducts() {
      try {
        let res = await fetch('https://fakestoreapi.com/products')
          .then(response => {
            return response.json()
          })
          .then(data => {
            let allProducts = data
            setallProducts(allProducts)
            setRetainAllProducts(allProducts)
          })
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    if (recommBY === 'PRICE: LOW TO HIGH') {
      let products = [...allProducts]

      products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      setallProducts(products)
    } else if (recommBY === 'PRICE: HIGH TO LOW') {
      let products = [...allProducts]
      products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      setallProducts(products)
    } else {
      setallProducts([...retainAllProducts])
    }
  }, [recommBY])

  useEffect(() => {
    if (recommBY === 'PRICE: LOW TO HIGH') {
      setRecommTitle('PRICE: LOW TO HIGH')
    } else if (recommBY === 'PRICE: HIGH TO LOW') {
      setRecommTitle('PRICE: HIGH TO LOW')
    } else if (recommBY === 'NEWEST FIRST') {
      setRecommTitle('NEWEST FIRST')
    } else if (recommBY === 'POPULAR') {
      setRecommTitle('POPULAR')
    } else if (recommBY === 'RECOMMENDED') {
      setRecommTitle('RECOMMENDED')
    }
  })

  return (
    <>
      <div className='Body_container'>
        <div className='header_filter_div'>
          <div className='header_showfilter_div'>
            <span className='total_products_span'>
              {allProducts && `${allProducts.length} items`}
            </span>
            <button className='header_filter_btn' onClick={handleFilter}>
              {isFilterHidden ? 'SHOW FILTER' : 'HIDE FILTER'}
            </button>
          </div>
          <div className='header_recomm_div'>
            <span
              style={{cursor: 'pointer', padding: '10px'}}
              onClick={() => {
                setRecommended(!recommended)
              }}
            >
              {recommTitle}
            </span>{' '}
            {recommended ? (
              <svg
                onClick={() => {
                  setRecommended(!recommended)
                }}
                width='12'
                height='6'
                cursor='pointer'
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
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setRecommended(!recommended)
                }}
                width='12'
                height='6'
                cursor='pointer'
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
            )}
            {recommended && (
              <Recommended
                setRecommended={setRecommended}
                setRecommBy={setRecommBy}
              />
            )}
          </div>
        </div>
        <div
          className={
            isFilterHidden
              ? 'product_container_filter_inactive'
              : 'product_container_filter_active'
          }
          style={{left: isFilterHidden ? '0px' : '265px'}}
        >
          {allProducts &&
            allProducts?.map(item => {
              return (
                <div className='product_div' key={item.id}>
                  <div className='img_background_div'>
                    <img
                      src={item.image}
                      className='product_img'
                      alt='product_img'
                    />
                  </div>
                  <div className='product_details_div'>
                    <p style={{marginLeft: '10px', fontWeight: 'bold'}}>
                      {item.title}
                    </p>
                    <div className='product_login_link'>
                      <a
                        href=''
                        style={{color: 'gray', textDecoration: 'none'}}
                      >
                        Sign in or Create a new account to see pricing
                      </a>
                      <svg
                        onClick={handleSvgColor}
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='20'
                        viewBox='0 0 22 20'
                        fill={svgColor}
                        className='svg_img'
                      >
                        <path
                          d='M11.6344 18.8893C11.2865 19.0121 10.7135 19.0121 10.3656 18.8893C7.39814 17.8763 0.767442 13.6502 0.767442 6.48744C0.767442 3.32558 3.31535 0.767442 6.45674 0.767442C8.31907 0.767442 9.96651 1.66791 11 3.05954C12.0335 1.66791 13.6912 0.767442 15.5433 0.767442C18.6847 0.767442 21.2326 3.32558 21.2326 6.48744C21.2326 13.6502 14.6019 17.8763 11.6344 18.8893Z'
                          stroke='#292D32'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        {isFilterHidden ? (
          ' '
        ) : (
          <FilterBox handleFilterCategory={handleFilterCategory} />
        )}
      </div>
    </>
  )
}

export default ProductBody
