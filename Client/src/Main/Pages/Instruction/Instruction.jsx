import React from 'react'
import Privacy from '../../Components/Home/Privacy'
import { useParams } from 'react-router-dom'
import Terms from '../../Components/Home/Terms'

const Instruction = () => {
    const { param } = useParams();

    const ParamMacth = {
        privacy: <Privacy />,
        terms: <Terms />
    }

    const Component = ParamMacth[param]

    return (
        <div>
            {Component}
        </div>
    )
}

export default Instruction