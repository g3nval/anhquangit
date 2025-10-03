import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import channel from "../../assets/images/channels4_profile.jpg"
import { connect } from "react-redux";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render() {
        console.log('>>> check props redux: ', this.props.dataRedux)

        return (
            <>
                <div>Hello from hompage with me!!</div>
                <div>
                    <img src={channel} style={{ width: '300px', height: '300px', marginTop: '20px' }} />
                </div>
            </>

        )
    }
}

// export default withRouter(Home);


const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }

}

export default connect(mapStateToProps)(Color(Home));