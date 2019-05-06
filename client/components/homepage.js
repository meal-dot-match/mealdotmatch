import React from 'react';
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'



const getMealsQuery = gql`
	query recipeList {
        recipeList{
           q
        }
        
		
	}
`;

class HomePage extends React.Component {
    constructor() {
        super();
        this.getStuff = this.getStuff.bind(this);
    }
    getStuff() {
        console.log('this props.data', this.props)

    }
    render() {
        // console.log('In RENDER', this.props);
        return (
            // <ApolloProvider client={client}>
            <div>Hey!
                    <button onClick={() => this.getStuff()}>CLICK ME</button>
            </div>
            // </ApolloProvider>
        )
    }
}


export default graphql(getMealsQuery)(HomePage)