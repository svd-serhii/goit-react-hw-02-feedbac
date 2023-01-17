import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  flex-direction: raw;
  gap: 20px;
`;
export const FeedbackItem = styled.li``;
export const FeedbackBtn = styled.button`
  width: 100px;
  font-size: 16px;
  font-weight: 400;
  color: black;
  padding: 10px;
  border-radius: 4px 4px 4px 4px;
  cursor: pointer;
  transition: scale 300ms ease-in-out;
  outline: none;
  border: none;
  :hover {
    scale: 1.2;
  }
  :active {
    color: #fff;
  }
`;
