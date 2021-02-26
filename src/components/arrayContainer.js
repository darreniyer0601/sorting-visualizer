import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ArrayContainer extends React.Component {

    render() {

        const arr = this.props.arr;

        return (
            <div className="d-flex justify-content-center align-items-end" style={{ height: '85vh' }}>
                {arr.map((val, idx) => (
                    <div key={idx}
                        style={{
                            height: `${val}px`,
                            borderLeft: '6px solid blue',
                            marginRight: '2px'
                        }} >
                    </div>
                ))}
            </div>
        )
    }
}

export default ArrayContainer;