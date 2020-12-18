import React, {Component} from 'react';

class ProductListApi extends Component {
    state = {
        loading: true,
        data: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json,
                    loading: false
                })
            }).finally(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        if (this.state.data.length === 0) {
            return <div>No data available</div>
        }
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Product</h1>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.data.map((e, i) => {
                                return <div className="col-md-6" key={i}>{e.name}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductListApi;