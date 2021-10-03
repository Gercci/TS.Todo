import styled from 'styled-components';

// interface AddForm {
//     scrollHeight: number
// }

export const AddForm = styled.textarea`
  display: block;
  margin: 0 auto;
  padding: 6px 10px;
  width: 100%;
  min-height: 100px;
  border: 2px solid gainsboro;
  border-radius: 6px;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: .5px;
  color: black;
  background-color: rgba(255, 255, 255, .4);
  transition: all .7s;
  resize: none;
  &:focus {
    outline: none;
    border-color: blue;
    background-color: rgba(255, 255, 255, .6);
  }
`;
