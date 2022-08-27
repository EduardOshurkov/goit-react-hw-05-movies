import { BallTriangle } from 'react-loader-spinner';
import styled from '@emotion/styled';
import React from 'react';



export default function Loader() {
    return (
        <LoaderWraper>
            <BallTriangle color="#00BFFF" height={80} width={80} />
        </LoaderWraper>
    )
}


const LoaderWraper = styled.div`
 display: flex;
  justify-content: center;
`