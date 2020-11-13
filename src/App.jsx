import React from 'react';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishList);

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

  const Form = styled.form`
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
  // Map through each wishlist item from the redux store (global state)
  const wishlistJSX = wishlist.map((item,index) => (
    <Item
      key={index}
      onClick={event => {
        dispatch(deleteItem(item))
    }}>
      {item}
    </Item>
  ))

  return (
    <MainContainer>
      <h1>MY WISHLIST</h1>
      <InnerContainer id="wishlist">
          {wishlistJSX}
      </InnerContainer>


      {/* Form for adding item to wishlist with onSubmit functionality */}
      <Form onSubmit={event => {
        event.preventDefault()
        let input = event.target.input.value;
        if(!wishlist.includes(input)) {
          dispatch(addItem(input));
        }
        event.target.input.value = "";
      }}>

          {/* Input text box */}
          <InputBox type="text" name="input"/>
          <br/>
          {/* Button to add item to wishlist */}
          <AddButton>Add</AddButton>
      </Form>

      {/* Button to submit wishlist */}
      <SubmitButton
        onClick={() => {
          let wishlistContents = document.getElementById("wishlist")
          if(wishlistContents.innerHTML !== "") {
            wishlistContents.innerHTML = ""
            alert("Wish list submitted to Santa!")
          }
      }}>
        Submit
      </SubmitButton>
    </MainContainer>
  )
}

export default App;
