import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Lato, sans-serif;
  font-weight: lighter;
  color: #535b62;
  padding: 8px 0 10px 0;
  border-radius: 8px;
  margin: 0 10px 22px 7px;
  transition: background 230ms ease-in;
  &:hover {
    background: #e6f5ff;
  }
`;

export const Logo = styled.div`
  position: relative;
  & span {
    position: absolute;
    bottom: 7px;
    left: 4px;
    width: 96%;
    font-weight: bold;
    color: white;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Img = styled.img`
  position: relative;
`;

export const Name = styled.div`
  width: 100%;
  text-align: center;
  word-break: break-all;
  position: relative;
`;
