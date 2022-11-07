import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";

import axios from "axios";

import {mapUrls} from "../../configs";
import {REACT_APP_LOCATION_TOKEN} from "../../token";

import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";


const Job = ({job}) => {

    let lat = job.location.lat;
    let lon = job.location.long;

    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get(`${mapUrls}lat=${lat}&lon=${lon}&limit=5&appid=${REACT_APP_LOCATION_TOKEN}`)
            .then((response) => {
                setLocation(response.data)
            })
    }, [])

    return (
        <GeneralContainerStyled>
            <div>
                <PhotoStyle src={"https://picsum.photos/200/300"}/>
            </div>
            <div>

                <NameStyle>
                    {job.name}
                </NameStyle>
                <hr/>
                <div>
                    {job.title}
                </div>
                <div>
                    Created at: {job.createdAt}
                </div>
                <div>
                    <FontAwesomeIcon icon={faLocationDot}/> {location.length ? location[0].name : 'Imaginary location'}
                </div>
                <ButtonStyle className='job'><Link  to={job.id.toString()} state={job}>JobDetails</Link></ButtonStyle>
            </div>
        </GeneralContainerStyled>
    );
};

const GeneralContainerStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 180px;
  background: snow;
  border: 1px solid darkslategrey;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const PhotoStyle = styled.img`
  border-radius: 50%;
  max-width: 100%;
  width: 132px;
  height: 132px;
  margin: 0 20px 0 20px;
  overflow: hidden;
`;
const NameStyle = styled.div`
  font-size: 25px;
`;
const ButtonStyle = styled.span`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  background: transparent;
  border: 1px solid darkslategrey;
`;

export {Job};