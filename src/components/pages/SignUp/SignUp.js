import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjThree} from '../Services/Data'
function SignUp() {
    return (
        <>    
           <HeroSection {...homeObjThree}/>
           <Pricing />
        </>
    )
}

export default SignUp
