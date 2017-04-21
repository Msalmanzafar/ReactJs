import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';


const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
        selected: true,
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
        selected: true,
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];
class AvailibaleProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px',
        };
    }
    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({ height: event.target.value });
    };
    render() {
        /*let AvailProducts = Object.keys(this.props.Products).map((key, index) => {
            let val = this.props.Products[key];
            let keys = key;
            return (
                <mat.Paper style={style} zDepth={1} key={index} >
                    <mat.List >
                        <mat.ListItem
                            disabled={true}
                            leftAvatar={
                                <mat.Avatar src="" />
                            }
                        >
                            <span ><b>{val.name}</b></span>
                            <span >{val.crimeType}</span><br />
                            <span >{val.emailId}</span>
                            <span style={styles.status}>{val.status}</span><br />

                            <mat.FlatButton
                                label="Details"
                                style={styles.FlatButton}
                            />
                        </mat.ListItem>
                    </mat.List>
                </mat.Paper>
            )
        })*/
        return (
            <div>
                <p>something</p>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.ProductsReducers.ProductsArray,
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         AddProdutsAction: (addProducts) => {
//             dispatch(AddProdutsAction(addProducts));
//         }
//     };
// }
export default connect(mapStateToProps)(AvailibaleProducts);
// export default AvailibaleProducts;