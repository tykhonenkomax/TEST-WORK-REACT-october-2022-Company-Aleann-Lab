import React from 'react';

import {useLocation} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const JobsDetails = () => {

    let {state} = useLocation();

    return (
        <WrapperContainer>
            <br/>
            <GeneralContainerStyled>
                <TitleTextStyle>
                    <div>JobsDetails</div>
                </TitleTextStyle>

                <AwesomeStyle>
                    <div>
                        <FontAwesomeIcon icon={faBookmark}/> Save to my List
                    </div>
                    <AwesomeShareNodesStyle>
                        <FontAwesomeIcon icon={faShareNodes}/> Share
                    </AwesomeShareNodesStyle>
                </AwesomeStyle>

            </GeneralContainerStyled>
            <br/>
            <hr/>
            <br/>
            <ButtonStyle>APPLY NOW</ButtonStyle>
            <br/>
            <DescriptionTextStyle><DescriptionTextStyleSecond>Position:</DescriptionTextStyleSecond> {state.name}
            </DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond>email:</DescriptionTextStyleSecond> {state.email}
            </DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond>Phone number: </DescriptionTextStyleSecond>{state.phone}
            </DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond>About:</DescriptionTextStyleSecond> {state.title}
            </DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond>Address:</DescriptionTextStyleSecond> {state.address}
            </DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond></DescriptionTextStyleSecond>{state.benefits[0]}
            </DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond>Data of created:</DescriptionTextStyleSecond> {state.createdAt}</DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond></DescriptionTextStyleSecond>{state.description}
            </DescriptionTextStyle>
            <DescriptionTextStyle><DescriptionTextStyleSecond>Salary:</DescriptionTextStyleSecond> {state.salary} /Year</DescriptionTextStyle>
            <br/>
            <img src={state.pictures[0]}/>
            <br/>
            <ButtonStyle>APPLY NOW</ButtonStyle>
        </WrapperContainer>

    );
};

const WrapperContainer = styled.div`
  margin-top: 50px;
  border: 1px solid darkslategrey;
  padding: 15px;
`;
const GeneralContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AwesomeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AwesomeShareNodesStyle = styled.div`
  margin-left: 20px;
`;
const ButtonStyle = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  background: transparent;
  border: 1px solid darkslategrey;

  &:hover {
    color: snow;
  }
`;
const TitleTextStyle = styled.div`
  font-size: 30px;
  color: snow;
`;
const DescriptionTextStyle = styled.div`
  font-size: 20px;
  color: snow;
`;
const DescriptionTextStyleSecond = styled.div`
  font-size: 20px;
  color: darkslategrey;
`;


export {JobsDetails};