import React from 'react';
import './Demo.scss'; // Assuming you have a CSS file for styling

// This component demonstrates how to handle form input in React.
class ChildComponent extends React.Component {


    state = {
        showpeople: false,
    }
    handleChangefirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }


    handleChangelastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log('>>>call handleSubmit: ', this.state);
        // Here you can handle the form submission, e.g., send data to a server
        event.preventDefault(); // Prevent the default form submission behavior
    }
    handleshowhide = () => {
        this.setState({
            showpeople: !this.state.showpeople
        })
    }

    handleDelete = (id) => {
        console.log('>>>check delete id: ', id);
        this.props.deletePerson(id);
    }

    render() {

        let { arraypeople } = this.props;
        let { showpeople } = this.state;

        return (
            <>
                {showpeople === false ?
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleshowhide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className='people-list'>
                            {
                                arraypeople.map((item, index) => {
                                    if (item.salary >= 1000) {
                                        return (

                                            <div key={item.id}>
                                                {item.name} - {item.salary}$ &nbsp;
                                                <span onClick={() => this.handleDelete(item)}>X</span>
                                            </div>
                                        )

                                    } else {
                                        return (
                                            <div></div> // This will render nothing if salary is less than 1000
                                        )
                                    }

                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleshowhide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        );

    }
}



export default ChildComponent;
// This is a simple React component that renders a heading and a paragraph.