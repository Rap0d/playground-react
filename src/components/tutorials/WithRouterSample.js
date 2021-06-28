import React from "react";
import {withRouter} from 'react-router-dom'
import styled from "styled-components";

const TxtArea = styled.textarea`
min-width: 400px;
min-height: 150px; 
`

const WithRouterSample = ({location, match, history}) => {
    return (
        <>
            <h4>location</h4>
            <TxtArea
                value={JSON.stringify(location, null, 2)}
                readOnly={true}
            />
            <h4>match</h4>
            <TxtArea
                value={JSON.stringify(match, null, 2)}
                readOnly={true}
            />
            <br/>
            <button onClick={() => history.push('/')}>GO HOME</button>
        </>
    )
}

export default withRouter(WithRouterSample)