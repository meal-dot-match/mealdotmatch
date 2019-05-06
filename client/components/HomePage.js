import React from 'react'
import {graphql} from 'react-apollo'
import {gql} from 'apollo-boost'

class HomePage extends React.Component {
  constructor() {
    super()
    this.getStuff = this.getStuff.bind(this)
  }
  getStuff() {
    console.log('getStuff', this.props)
  }

  // async getStuff() {
  //         const query = `
  //   query {
  //     getRecipes {
  //       image
  //       ingredients
  //     }
  //   }
  // `;
  //         const url = "api/graphql";
  //         const opts = {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({ query })
  //         };
  //         const res = await fetch(url, opts)
  //         console.log(res)
  // .then(console.log)
  // .catch(console.error);

  //   fetch('/graphql', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({query: '{getRecipes: {url}}'})
  //   })
  //     .then(r => console.log('this is r', r))
  //     .then(data => console.log('data returned', data))
  // }

  render() {
    console.log('In RENDER', this.props)
    return (
      <div>
        <button type="button" onClick={() => this.getStuff()}>
          {' '}
          Hello{' '}
        </button>
      </div>
    )
  }
}

const getMealsQuery = gql`
  {
    recipes {
      label
    }
  }
`

export default graphql(getMealsQuery)(HomePage)
