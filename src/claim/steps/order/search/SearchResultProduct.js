import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import ChangeProductDialog from './ChangeProductDialog';
import Amount from "../../../../common/Amount";


const styles = theme => ({
    root: {
        width: '100%',
        maxHeight: 270,
        overflowX: 'auto',
        marginTop: theme.spacing.unit,
    },
    table: {
        minWidth: 320,
    },
    actionButton: {
        height: "35px",
        width: "35px",
    },
    settingsButton: {
        height: "35px",
        width: "35px",
        margin: theme.spacing.unit,
    },
    actionButtonIcon: {
        color: "#fff",
    },
    settingsButtonIcon: {
        color: "#777",
        height: "20px",
        width: "20px",
    },
    rotate: {
        transform: "rotate(180deg)"
    },
    fixedHeader: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: 5,
    }
});

class SearchResultProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: -1,
            last: "",
        }
    }

    triggerSort = (val, isNumber, sortKey) => {
        this.props.sortMethod(
            this.props.testDataProduct,
            (this.state.sort === -1 && this.state.last === sortKey) ?
                (this.setState({ sort: 1 }), -1) :
                (this.setState({ sort: -1 }), 1),
            val, isNumber);
        this.setState({ last: sortKey });
    }

    handleInputChange = product => event => {
        this.props.getInputAmountProduct(product, event.target.value); //this sets the parent state to a string, which can even be ""
        //since textfield is only disabled when value is 0, you can press backspace without disabling the textfield
    }
    handleLeaveInput = product => event => {
        this.props.setInputAmountProductToNumber(product);
        //this converts the value in the parent state to a number, meaning "" will become 0, and "2" will become 2
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 100, maxWidth: '100px' }} className={classes.fixedHeader} onClick={() => this.triggerSort(["navn"], false, "product")}>Produkt {(this.state.last === "product") ? (
                                (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)
                            ) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort(["kode"], false, "producer")}>Produktkode {(this.state.last === "producer") ? (
                                (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)
                            ) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell className={classes.fixedHeader}>Antall</TableCell>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort(["pris"], true, "price")}>Nettopris {(this.state.last === "price") ? (
                                (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)
                            ) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell className={classes.fixedHeader}>Nettototal</TableCell>
                            <TableCell className={classes.fixedHeader}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.testDataProduct.map((n, index) => {
                            if (this.props.searchFilter.indexOf(n) === -1) {
                                return null;
                            }
                            return (
                                <TableRow key={n.kode}>
                                    <TableCell style={{ width: 100, maxWidth: 150 }}>{n.navn}</TableCell>
                                    <TableCell>{n.kode}</TableCell>
                                    <TableCell><TextField disabled={this.props.selectedProductList[n.kode] === 0 ? true : false}
                                        style={{ width: 40 }}
                                        type="number"
                                        onChange={this.handleInputChange(n)}
                                        onBlur={this.handleLeaveInput(n)}
                                        value={this.props.selectedProductList[n.kode]} />
                                    </TableCell>
                                    <TableCell><Amount>{n.pris}</Amount></TableCell>
                                    <TableCell><Amount>{this.props.selectedProductList[n.kode] * n.pris}</Amount></TableCell>
                                    <TableCell> <div style={{display: 'table-cell'}}>
                                        <ChangeProductDialog changeProduct={this.props.changeProduct} currentProduct={n}/>
                                        </div>
                                        {!this.props.selectedProductList[n.kode] ? (
                                            <div style={{display: 'table-cell'}}>
                                                <Button mini variant="fab" color="secondary" aria-label="add" onClick={() => this.props.addMethod(n)}
                                                    className={classes.actionButton}>
                                                    <Add className={classes.actionButtonIcon} />
                                                </Button>
                                            </div>
                                        ) : (
                                                <div  style={{display: 'table-cell'}}>
                                                    <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.removeMethod(n)}
                                                        className={classes.actionButton}>
                                                        <Remove />
                                                    </Button>
                                                </div>
                                            )}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SearchResultProduct.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultProduct);