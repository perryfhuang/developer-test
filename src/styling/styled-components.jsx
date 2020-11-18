import styled from 'styled-components';

const MainContainer = styled.main`
  margin: 2vh auto;
  padding: 10px 0 20px 0;
  border: none;
  border-radius: 10px;
  height: 800px;
  width: 600px;
  background-color: #ffc0cb;
  text-align: center;
  box-shadow: 0px 0px 20px #000000;
`

const InnerContainer = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  height: 540px;
  width: 400px;
  background-color: white;
  text-align: left;
`

const AddItemForm = styled.form`
  margin: 20px auto 20px auto;
`
const InputBox = styled.input`
  width: 380px;
  height: 5px;
  padding: 10px;
`

const AddButton = styled.button`
  background-color: #90EE90;
  border: none;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  box-shadow: 0px 0px 3px #000000;
`

const SubmitButton = styled.button`
  background-color: #90EE90;
  border: none;
  width: 400px;
  height: 40px;
  box-shadow: 0px 0px 3px #000000;
`
const Item = styled.div`
  margin: 15px;
`

export { MainContainer, InnerContainer, AddItemForm, InputBox, AddButton, SubmitButton, Item }
