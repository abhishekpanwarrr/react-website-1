import React from 'react'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {BsXDiamondFill} from 'react-icons/bs'
import {GiCrystalize} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import {Button} from './Button'
import './Pricing.css'

function Pricing() {
    return (
    <IconContext.Provider value={{color:'#fff',size:64}}>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">
                        Pricing
                    </h1>
                    <div className="pricing__container">
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>Per Month</p>
                                <ul className="pricing__container-features">
                                    <li>100 Transactions</li>
                                    <li>2% cash back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div> 
                        </Link>

                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$15.99</h4>
                                <p>Per Month</p>
                                <ul className="pricing__container-features">
                                    <li>250 Transactions</li>
                                    <li>2.3% cash back</li>
                                    <li>$20,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>Choose Plan</Button>
                            </div> 
                        </Link>

                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                <h3>Premium</h3>
                                <h4>$18.99</h4>
                                <p>Per Month</p>
                                <ul className="pricing__container-features">
                                    <li>3000 Transactions</li>
                                    <li>2.6% cash back</li>
                                    <li>$50,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div> 
                        </Link>
                    </div>
                </div>
            </div></IconContext.Provider>
    )
}

export default Pricing
