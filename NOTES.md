<!-- Login -----------------
// import React from 'react'; 
// import { connect } from 'react-redux';
// import { updateLoginForm } from '../../actions/loginForm';
// import { login } from '../../actions/currentUser';

// const Login = ({ loginFormData, updateLoginForm, login }) => {
 
//   const handleChange = event => {
//     const { name, value } = event.target
//     const updatedFormInfo = { 
//       ...loginFormData, 
//       [name]: value
//     }
//     updateLoginForm(updatedFormInfo)
//   }

//   const handleSubmit = event => {
//     event.preventDefault()
//     login(loginFormData)
//   }

//   return(
//     <div className="ui container">
//       <div className="row">
//         <div className="col-md-8 col-md-offset-2">
//           <div className="panel panel-default">
//             <div className="panel-body">
//             <form className="ui form" onSubmit={handleSubmit}>
//               <div className="field">
//                 <label>Email:</label>
//                 <input type="text" placeholder="Email" value={loginFormData.email} name="email" onChange={handleChange} required/>
//               </div>
//               <div className="field">
//                 <label>Password:</label>
//                 <input type="password" placeholder="password" value={loginFormData.password} name="password" onChange={handleChange} required />
//               </div>
//               <button type="submit" className="ui button primary">Submit</button>
//             </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
// }

// const mapStateToProps = state => {
//   return {
//     loginFormData: state.loginForm
//   }
// }

// export default connect(mapStateToProps, { updateLoginForm, login })(Login);












<!-- 
const Header = ({ currentUser }) => {
  if (!currentUser) {
    return <Login />
  } else {
  return(
    <div className="ui secondary pointing menu"> 
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/lists" className="item">
        Lists
      </Link>
      <div className="">
       <strong>Welcome, {currentUser.currentUser.data.attributes.name}</strong> 
      </div>
      <div className="right menu">
        <Logout />
      </div>
    </div>
  )
  }
} -->













----------HEADER-----------------
return (
    <div className="ui pointer menu">
      { currentUser ? <strong>Welcome, {currentUser.currentUser.data.attributes.name}</strong> : ""}
      {/* { currentUser ? <Logout/> : <Login/> } */}
      { currentUser ? <Logout /> : 
        <div>
          <h1><Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link></h1>
        </div>
      }
    </div>
  )



  ----------------------QuickSort---------------------------
   function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
     let indexOfMin = i;

     for (let j = i+1; j < arr.length; j++) {
       if(arr[j] < arr[indexOfMin]) {
         indexOfMin = j;
       }
     }

     if (indexOfMin !== i){
       let lesser = arr[indexOfMin];
       arr[indexOfMin] = arr[i];
       arr[i] =lesser;
     }
   }
   return arr;
 }

 let array1 = [1,2,3,4,5,6,7,8,9,10]
 let array2 = [304, 530, 100, 23, 1234, 500, 494, 903]


 selectionSort(array2)

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], middle element
        i       = left, left pointer
        j       = right; right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); index returned from partition
        if (left < index - 1) { more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
 first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); prints [2,3,5,6,7,9]
