import React from 'react';
import { graphql, Query } from 'react-apollo'
import { gql } from 'apollo-boost'




const getMealsQuery = gql`
	query recipe {
        recipe{
           count
        }
        
		
	}
`;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.getStuff = this.getStuff.bind(this);
    }
    async getStuff() {
        // const { data } = await client.query({
        //     query: getMealsQuery,
        // })
        console.log('this data within the GET STUFF FUNCTION', this.props)

    }
    render() {
        console.log('In RENDER', this.props);

        return <Query query={getMealsQuery}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Error! ${error}`;

                return (
                    <div>
                        {Object.keys(data)}</div>
                );
            }}
        </Query>
    }
}


export default graphql(getMealsQuery)(HomePage)