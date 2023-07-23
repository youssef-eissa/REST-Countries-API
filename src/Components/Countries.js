import React, {  useState } from 'react'
import './Countries.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import JsonData from './data.json'


function Countries({mode,countryDetails,setCountry}) {
    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])
    function Wordfiltered(e) {
        const worddFiltered=e.target.value
        const filteredWord = JsonData.filter(country => {
        return country.name.toLowerCase().includes(worddFiltered.toLowerCase())
        })
        setFiltered(filteredWord)
        setData([])

}
    function handleOpt(e) {
        const selected = e.target.value
        const filteredData = JsonData.filter(fcountry => {
            return fcountry.region===selected
        })
        setData(filteredData)

    }

return (
    <div className='container-md container-fluid'>
        <div className='row'>
            <div className='col-12 d-flex flex-md-row flex-column justify-content-between inputs p-md-5  mt-md-0 mt-3'>
                <div className='col-md-6 col-12 mb-3 mb-md-0 m position-relative'>
                    <SearchIcon color={mode==="light"?"disabled":"white"} className='position-absolute z-1 translate-middle top-50 ms-4 primary' />
                    <input style={mode==="light"?{backgroundColor:"white",color:"#848484"}:{backgroundColor:"#2B3844",color:"white"}} type='text' placeholder='Search for a country…' className={`ps-5 py-3 w-100 ${mode}`} onChange={e=>Wordfiltered(e)}/>
                </div>
                <select style={mode==="light"?{backgroundColor:"white",color:"#848484"}:{backgroundColor:"#2B3844",color:"white"}} className='col-md-3 col-7 p-3' onChange={(e) => { handleOpt(e) }}>
                        <option>Filter By Region</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
                </select>

        </div>
        </div>
        <div className='row'>
            {data.length===0&& filtered.length===0?<div className='col-md-12 d-flex mt-5 justify-content-between gap-5 flex-wrap p-3'>
                {JsonData.slice(0,6).map(country => {
                    return  <Link to='/details'  onClick={() => setCountry(country)}  style={mode==="light"?{backgroundColor:"white",color:"black",textDecoration:"none"}:{backgroundColor:"#2B3844",color:"white",textDecoration:"none"}} key={country.name} className='col-md-3 col-12 d-flex flex-column '>
            <div  className=' col-md-12 cflag  '>
                <img alt='flag' src={country.flag } className='img-fluid' />
            </div>
            <div className='down-text p-3'>
                <h1  className='col-md-12'>{country.name}</h1>
                <div className='info col-md-12'>
                    <div className='col-md-12 '>
                        <span className='fw-bold '> Population:</span>{country.population.toLocaleString('en-US')}
                    </div>
                    <div className='col-md-12'>
                        <span className='fw-bold'> Region:</span>{country.region}
                    </div>
                    <div className='col-md-12'>
                        <span className='fw-bold'> Capital:</span>{country.capital}
                    </div>
                </div>
            </div>
        </Link>
                })}
            </div> :data.length>0? <div className='col-md-12 d-flex mt-5 justify-content-around gap-5 flex-wrap'>
                    {data.map(country => {
                return <Link to='/details'  onClick={() => setCountry(country)} style={mode==="light"?{backgroundColor:"white",color:"#848484",textDecoration:"none"}:{backgroundColor:"#2B3844",color:"white",textDecoration:"none"}} key={country.name} className='col-md-3 d-flex flex-column '>
            <div  className=' col-md-12 cflag  '>
                <img alt='flag' src={country.flag } className='img-fluid' />
            </div>
            <div className='down-text p-3'>
                <h1 className='col-md-12'>{country.name}</h1>
                <div className='info col-md-12'>
                    <div className='col-md-12 '>
                        <span className='fw-bold '> Population:</span>{country.population.toLocaleString('en-US')}
                    </div>
                    <div className='col-md-12'>
                        <span className='fw-bold'> Region:</span>{country.region}
                    </div>
                    <div className='col-md-12'>
                        <span className='fw-bold'> Capital:</span>{country.capital}
                    </div>
                </div>
            </div>
        </Link>
            })}
            </div>:filtered.length>0?<div className='col-md-12 d-flex mt-5 justify-content-around gap-5 flex-wrap  '>
                    {filtered.map(country => {
                return <Link to='/details'  onClick={() => setCountry(country)}style={mode==="light"?{textDecoration:"none",backgroundColor:"white",color:"#848484"}:{backgroundColor:"#2B3844",color:"white",textDecoration:"none"}} key={country.name} className='col-md-3  d-flex flex-column '>
            <div  className=' col-md-12 cflag  '>
                <img alt='flag' src={country.flag } className='img-fluid' />
            </div>
            <div className='down-text p-3'>
                <h1 className='col-md-12'>{country.name}</h1>
                <div className='info col-md-12'>
                    <div className='col-md-12 '>
                        <span className='fw-bold '> Population:</span>{country.population.toLocaleString('en-US')}
                    </div>
                    <div className='col-md-12'>
                        <span className='fw-bold'> Region:</span>{country.region}
                    </div>
                    <div className='col-md-12'>
                        <span className='fw-bold'> Capital:</span>{country.capital}
                    </div>
                </div>
            </div>
        </Link>
            })}
            </div>:""}
        </div>
    </div>
)
}

export default Countries