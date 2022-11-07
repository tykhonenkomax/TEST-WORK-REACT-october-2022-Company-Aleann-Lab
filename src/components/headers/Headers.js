import React from 'react';

import {Link,Outlet} from "react-router-dom";

import styled from "styled-components";


const Headers = () => {
    return (
        <div>
            <div className='job'><Link to={'jobs'} ><LinkStyle>Jobs</LinkStyle></Link></div>
            <hr/>
            <Outlet/>
        </div>

    );
};

const LinkStyle = styled.div`
  font-size: 25px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  background: transparent;
  border: 1px solid darkslategrey;
`;
export {Headers};