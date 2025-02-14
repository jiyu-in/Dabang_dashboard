import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Typography} from '@mui/material';
import {BorderBox, BoxTitle, FlexBox, FlexColumnBox} from '../styled/Styled';

const Root = styled(BorderBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:32px;
`;

const ListWrapBox = styled(FlexColumnBox)`
    gap:16px;
`;

const ListBox = styled(FlexBox)`
    align-items: center;
    justify-content: space-between;
    font-size: 0.813rem;
    color: #222;
    & > div{
        align-items: flex-start;
    }
`;

const DateBox = styled(FlexBox)`
    display: flex;
    align-items: center;
    gap:10px;
`;

const DotIcon = styled('div')`
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-width: 3px;
    border-style: solid;
    /* border-color: #dadada; */
    border-color: ${(props) => props.status === "마감" ? "#dadada" : props.status === "진행중" ? "#1673F8" : "#80B5FF"}; 
    border-radius: 11px;
    box-sizing: border-box;
`;

const DetailBox = styled(Box)`
    margin: 0 16px;
    & .MuiTypography-root{
        margin: 0;
        font-size: 0.813rem;
        line-height: 1.25;
        font-weight: ${(props) => (props.status === "진행중" ? 700 : "normal")};
    }
`;

const State = styled('span')`
    height:100%;
    display: inline-flex;
    padding: 3px;
    color:#666;
    background-color: #F0F0F0;
    word-break: keep-all;
`;
const StateProgress = styled(State)`
    color:#fff;
    background-color: #C12424;
    font-weight: 600;
`;

const list = [
    { status:'마감' , date: '02.01', deadline: '02/01', detail:'세종 세종 리첸시아 파밀리에' },
    { status:'진행중' , date: '02.03', deadline: '02/05', detail:'전남 목포 한양립스더 포레' },
    { status:'예정' , date: '02.12', deadline: '03/15', detail:'경기 가평 자이' },
    { status:'예정' , date: '02.14', deadline: '03/18', detail:'인천 송도 자이' },
];


function Calender( ) {
    return (
        <Root>
            <BoxTitle>
                <Typography variant="h4">내 캘린더</Typography>
            </BoxTitle>
            <ListWrapBox>
            {list.map((item, index) => (
                <ListBox key={index} sx={[ item.status === '마감' ? {color :  '#888' } : null ]}>
                    <FlexBox>
                        <DateBox>
                            <DotIcon status={item.status}/> {item.date}
                        </DateBox>
                        <DetailBox status={item.status}>
                            <Typography>{item.deadline} 까지</Typography>
                            <Typography>{item.detail}</Typography>
                        </DetailBox>
                    </FlexBox>
                    {item.status === "마감" ? <State>마감</State> : 
                    item.status === "진행중" ? <StateProgress>진행중</StateProgress> : 
                    <State>{item.status}</State>}
                    
                </ListBox>
            ))}
            </ListWrapBox>
        </Root>
    );
}

export default Calender;
