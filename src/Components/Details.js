import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

function Details({ mode, countryDetails }) {

    function Languages() {
    const languages=[]
    for (let i = 0; i < countryDetails.languages.length; i++){
        languages.push(countryDetails.languages[i].name)
    }
    return languages.map(lang => {
    return <span className='mx-1'> {lang}</span>
    })
    }
return (
    <div className='container'>
        <div className='row'>
        <div className='col-12 my-4'>
            <Link to='/REST-Countries-API/' style={mode==="light"?{color:"black",textDecoration:"none"}:{color:"white",textDecoration:"none"}} className='col-1'>
                <KeyboardBackspaceIcon/> back
            </Link>
        </div>
        <div className='col-12 d-flex justify-content-md-between flex-md-row flex-column'>
            <div className='col-md-5 col-12 mb-md-0 mb-3  flag'>
                <img alt='flag' src={countryDetails.flag } className='img-fluid' />
            </div>
            <div style={mode==="light"?{color:"black"}:{color:"white"}} className='col-md-5'>
                    <h1 style={{ fontSize: "32px" }}>{countryDetails.name}</h1>
                    <div className='info-box col-12 d-flex flex-md-row flex-column '>
                        <div className='col-md-6 col-12 mb-5 mb-md-0'>
                            <div className='col-12'> <span className='fw-bold'>Native Name:</span> { countryDetails.nativeName}</div>
                            <div className='col-12'> <span className='fw-bold'>Population:</span> { countryDetails.population.toLocaleString('en-US')}</div>
                            <div className='col-12'> <span className='fw-bold'>Region:</span> { countryDetails.region}</div>
                            <div className='col-12'> <span className='fw-bold'>Sub Region:</span> { countryDetails.subregion}</div>
                            <div className='col-12'> <span className='fw-bold'>Capital:</span> { countryDetails.capital}</div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <div className='col-12'> <span className='fw-bold'>Top Level Domain:</span> { countryDetails.topLevelDomain}</div>
                            <div className='col-12'> <span className='fw-bold'>Currencies:</span> { countryDetails.currencies[0].name}</div>
                            <div className='col-12'> <span className='fw-bold'>Languages:</span> { <Languages/>}</div>
                    </div>
                </div>

            </div>

        </div>
        </div>

    </div>
)
}

export default Details