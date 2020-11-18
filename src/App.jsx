import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import { MainContainer, InnerContainer, AddItemForm, InputBox, AddButton, SubmitButton, Item } from './styling/styled-components.jsx'

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishList);

  const wishlistItems = wishlist.map((item,index) => (
    <Item key={index} onClick={event => dispatch(deleteItem(item))}>
      {item}
    </Item>
  ));

  const handleChange = e => setInput(e.target.value);
  const handleSubmit = e => {
    e.preventDefault()
    if(!wishlist.includes(input))
      dispatch(addItem(input));
    setInput('')
  };

  const submitWishlist = () => {
    let wishlistContents = document.getElementById("wishlist")
    if(wishlistContents.innerHTML !== "") {
      wishlist.map(item => dispatch(deleteItem(item)))
      alert("Wish list submitted to Santa!")
    }
  };

  return (
    <MainContainer>
      <h1>MY WISHLIST</h1>
      <InnerContainer id="wishlist">
        {wishlistItems}
      </InnerContainer>
      <AddItemForm onSubmit={handleSubmit}>
        <InputBox type="text" name="input" value={input} onChange={handleChange}/>
        <br/>
        <AddButton>Add</AddButton>
      </AddItemForm>

      <SubmitButton onClick={submitWishlist}>Submit</SubmitButton>
    </MainContainer>
  )
}

export default App;
