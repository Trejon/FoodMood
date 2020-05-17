import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MyLists extends React.Component{
  // constructor() {
  //   super()

  //   this.state = {
  //     likesCount: {
  //       "39": 1
  //     }
  //   }
  // }

  // incrementLikes = (id) => {
  //   const prevLikes = this.state.likesCount[id]
  //   if(prevLikes) {
  //     this.setState({
  //       likesCount: {...this.state.likesCount, [id]: prevLikes + 1 }
  //     })
  //   } else {
  //     this.setState({
  //       likesCount: {...this.state.likesCount, [id]: 1}
  //     })
  //   }
  // }
  
  render() {
  const listCards = this.props.lists.length > 0 ? 
    this.props.lists.map(l => (<div className="item" 
    key={l.id}>
      <i className="large list icon"></i>
       <div className="content">
        <div className="header"><h5><Link 
          to={`/lists/${l.id}`}>{l.attributes.name}
        </Link></h5></div>
        <div className="description">{l.attributes.description}</div>
        {/* <button className="likes" onClick={() => this.incrementLikes(l.id)}>{this.state.likesCount[l.id]} Likes</button> */}
       </div>
      </div>)) : <h2>Create lists to start adding restaurants and recipes!</h2>


  return(
    <div>
    <h3>These are your lists:</h3>
    <div className="ui list">
      {listCards}
      </div>
      <Link className="ui button primary" to='/lists/new'>Create New List</Link>
    </div> 
    
   )
  }
}

const mapStateToProps = ({ myLists }) => {
  return {
    lists: myLists,
  }
}

export default connect(mapStateToProps)(MyLists);