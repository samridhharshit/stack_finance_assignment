import React from "react";
import {Button} from "reactstrap";
import {connect} from "react-redux";

class Clone extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        // console.log(name, value);
        if (name === undefined || value === undefined) {}
        else {
            this.props.changes(name, value);
        }
    };

    render() {
        let {leaders} = this.props;
        leaders.sort((a, b) => (a.points < b.points) ? 1 : -1);
        return (
            <div className="row Clone">
                <div className="col"/>
                <div className="col-sm-5 data-container">
                    {
                        leaders.map(leader =>
                            <div
                                key={leader.id}
                                className="row data-row">
                                <div className="col-sm-6">{leader.name}</div>
                                <div className="col-sm-2">{leader.points}</div>
                                <div className="col-sm-2">
                                    <Button
                                        name="plus"
                                        value={leader.name}
                                        onClick={this.handleClick}
                                    >
                                        <i className="fas fa-plus"/>
                                    </Button>
                                </div>
                                <div className="col-sm-2">
                                    <Button
                                        name="minus"
                                        value={leader.name}
                                        onClick={this.handleClick}
                                    >
                                        <i className="fas fa-minus"/>
                                    </Button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        leaders: state.leaders
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changes: (type, name)  => {dispatch({type, name})}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clone)