import React from "react";

class PrivateArea extends React.Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         userCard: null
    //     }
    // }

    render() {
        const { authUser } = this.props;

        return (
            authUser &&
            <section>
                <h1>{authUser.login}</h1>
            </section>
        )
    }
}

export default PrivateArea;