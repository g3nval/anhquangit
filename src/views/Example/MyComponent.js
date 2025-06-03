import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
// This component demonstrates how to handle form input in React.
class MyComponent extends React.Component {


state = {

    arraypeople: [
        { id: '1', name: 'quan', age: '30', salary: '1000' },
        { id: '2', name: 'tuan', age: '25', salary: '2000' },
        { id: '3', name: 'huy', age: '20', salary: '3000' }

    ]
}
addnewPerson = (person) => {
    console.log('>>>check data from parent: ', person);
    this.setState({
        arraypeople: [...this.state.arraypeople, person]
    });
}



    render() {
        console.log('>>>call render: ', this.state);
        return (
            <> 
                <AddComponent                
                addnewPerson={this.addnewPerson}
                />
                
                <ChildComponent 
                arraypeople={this.state.arraypeople}
                />
            </>
        );

    }
}
export default MyComponent;
// This is a simple React component that renders a heading and a paragraph.