import './App.css';
import TopOfApp from './Components/TopOfApp'
import NewItemForm from './Components/NewItemForm'
import ProfilePage from './Components/ProfilePage'
import { Route, Switch } from 'react-router-dom';
import ItemContainer from './Components/ItemContainer';
import React, { Component } from 'react';
import Checkout from './Components/Checkout'
import Nav from './Components/Nav'
import SignIn from './Components/SignIn'

const itemsUrl = 'http://localhost:3000/items'
const reviewsUrl = 'http://localhost:3000/reviews'
const usersUrl = 'http://localhost:3000/users'
const purchasesUrl = 'http://localhost:3000/purchases'

export class App extends Component {
  state = {
    items: [],
    reviews: [],
    purchases: [],
    users: [], 
    logInFormEmail: '',
    logInFormPassWord: '',
    catagory: '',
    cart: null,
    userSignedIn: false,
    loggedInUser: null
}

componentDidMount(){
  fetch(itemsUrl).then(res => res.json()).then(items => this.setState({ items }))
  fetch(reviewsUrl).then(res => res.json()).then(reviews => this.setState({ reviews }))
  fetch(usersUrl).then(res => res.json()).then(users => this.setState({ users }))
  fetch(purchasesUrl).then(res => res.json()).then(purchases => this.setState({ purchases }))
}

handleOnchange = (event) => {
    if(event.target.value === 'All'){
        this.setState({ catagory: '' })
    } else {
    this.setState({catagory: event.target.value})
    }
}

findItem = (stuff) => {
         const itemID = stuff.match.params.id
         const item = this.state.items.find(item => item.id === itemID)
         return item
}

handleInCart = (id) => {
  const item = this.state.items.find(item => item.id === id)
  if (this.state.cart === null ){
     this.setState({ cart: [item] })
  } else {
    if(this.state.cart.includes(item)){
      alert('Item Already In Cart ')
    } else {
    this.setState({ cart: [...this.state.cart, item] })
    }
  }
}

handleNewReview = (review, rating, itemId) => {
  const userId = this.state.loggedInUser.id 
  fetch(reviewsUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      item_id: itemId,
      user_id: userId,
      rating: rating, 
      content: review
    })
  }).then(res => res.json()).then(newReview => this.setState({ reviews: [...this.state.reviews, newReview] }))
}

handleSignIn = (event) => this.setState({ [event.target.name]: event.target.value })


verifyUser = () => {
  const user = this.state.users.find(user => user.email === this.state.logInFormEmail)
  if(user.password === this.state.logInFormPassWord){
    this.setState({ loggedInUser: user })
  } else {
    alert('Incorrect Email or Password')
  }
}

  render() {
    let categories = this.state.items.map(item => item.category)
    console.log(this.state.logInFormPassWord)
  return(
    <div className="App">
      <Nav userSignedIn={this.state.userSignedIn} loggedInUser={this.state.loggedInUser} cart={this.state.cart} /> 
      <Switch>
       <Route path='/items/:id' name='item' render={(stuff) => {
         const thisID = parseInt(stuff.match.params.id)
       return <ItemContainer handleNewReview={this.handleNewReview} users={this.state.users} reviews={this.state.reviews} thisID={thisID} items={this.state.items} handleInCart={this.handleInCart}/>
       } }/> 
       <Route path='/profile/newitem' render={() => <NewItemForm /> }/>
       <Route path='/login' render={() => <SignIn verifyUser={this.verifyUser} handleSignIn={this.handleSignIn} logInFormEmail={this.props.logInFormEmail} logInFormPassWord={this.props.logInFormPassWord} />} /> 
       <Route path='/profile' render={() => <ProfilePage categories={categories} reviews={this.state.reviews} items={this.state.items} purchases={this.state.purchases} items={this.state.items} loggedInUser={this.state.loggedInUser}/> }/> 
       <Route path='/checkout' render={()=> <Checkout cart={this.state.cart} reviews={this.state.reviews} /> } />
       <Route path='/' render={() => <TopOfApp items={this.state.items} reviews={this.state.reviews} catagory={this.state.catagory} handleOnchange={this.handleOnchange} /> }/> 
       </Switch>
    </div>
  )
 }
}

export default App;
