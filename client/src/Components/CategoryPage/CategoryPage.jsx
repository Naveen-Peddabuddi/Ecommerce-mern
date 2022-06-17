import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./CategoryPage.css"
import { useDispatch, useSelector } from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { dataGet } from '../../Redux/CategoryData/Action';

import { SyncLoader } from "react-spinners"

export default function CategoryPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const data = useSelector((store) => store.categoryReducer.categoryData[0])
  const loading = useSelector((store) => store.categoryReducer.loading)
  console.log("data from redux on categ", data)
  console.log("loading on category", loading)

  const [sortby, SetSortby] = useState(1)

  useEffect(() => {
    

    const dataSend = {
      id,
      sortby,
    }
    dispatch(dataGet(dataSend))

  }, [id,sortby])
  return (
    <div className='CategoryPageMain'>

      <div className='CategoryBelowCategory'>

        <div className='FilterDiv'>
          <FormControl >
            <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">CATEGORIES</FormLabel>
            <RadioGroup className='checkDiv'
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel onClick={() => navigate("/category/women-kurtas-suits/products")} value="womenKurtas" control={<Radio />} label="Women Kurtas" />
              <FormControlLabel onClick={() => navigate("/category/women-tops/products")} value="womenTops" control={<Radio />} label="Women Tops" />
              <FormControlLabel onClick={() => navigate("/category/men-jeans/products")} value="MenJeans" control={<Radio />} label="Men Jeans" />
              <FormControlLabel onClick={() => navigate("/category/men-t-shirts/products")} value="MenTshirt" control={<Radio />} label="Men T-Shirt" />
              <FormControlLabel onClick={() => navigate("/category/baby-wears/products")} value="BabyWears" control={<Radio />} label="Baby Wears" />
            </RadioGroup>
           
            <FormLabel className='checkDiv' id="demo-radio-buttons-group-label">PRICE</FormLabel>
            <RadioGroup className='checkDiv'
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="highLow" onClick={() => { SetSortby(-1) }} control={<Radio />} label="High To Low" />
              <FormControlLabel value="lowHigh" onClick={() => { SetSortby(1) }} control={<Radio />} label="Low To High" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className='ProductsDiv'>

         

          {
            data && loading === false ?
              <>
                {
                  data.map((e) => (
                    <div className='IndividualProd' onClick={() => { navigate(`/${e.tag}/${e._id}`) }}>
                      
                      <div className='IndividualProdImg'>
                        <img src={e.images[0]} alt="" />
                      </div>
                      <div className='IndividualProdTitle'>
                        <p>{e.name}</p>
                        <p>
                          <span>₹ {e.price.sp}</span>
                          <span>₹ {e.price.mrp}</span>
                          <span><button id='buy'>Buy</button></span>
                        </p>
                        
                      </div>
                    </div>
                  ))
                }
              </> :
              <>
                <div className='IndividualProd SpinnerInCategoryDiv'>
                  <div className='SpinnerInCategory'>
                    <SyncLoader size={40} />
                  </div>
                </div></>
          }

        </div>
      </div>

    </div>
  )
}
