import React from 'react'

class HomePage extends React.Component {
    constructor() {
        super()
        this.getStuff = this.getStuff.bind(this)
    }

    getStuff() {

        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: '{url, image}' })

        }).then(r => console.log(r))
        // .then(data => console.log('data returned', data))

    }
    render() {
        return (
            <div>
                <button onClick={() => this.getStuff()}>Hello</button>
            </div>
        )
    }

}

export default HomePage