import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { Settings } from '@material-ui/icons';

const styles = theme => ({
    settingsButton: {
        height: "35px",
        width: "35px",
        margin: theme.spacing.unit,
    },
    settingsButtonIcon: {
        color: "#777",
        height: "20px",
        width: "20px",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    textFieldNumber: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 70,
    },
});

class ChangeProductDialog extends React.Component {
    state = {
        open: false,
        textFieldContent: "",
    };

    handleClickOpen = () => {
        let stateChange = this.props.currentProduct["beskrivelse"]!==""?(""+this.props.currentProduct["beskrivelse"]):("");
        this.setState({ 
            open: true,
            textFieldContent: stateChange, });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = () => {
        this.setState({ open: false });
        let description = document.getElementById("description").value!==""?(document.getElementById("description").value):(false);
        let price = !isNaN(document.getElementById("price").valueAsNumber)?(document.getElementById("price").valueAsNumber):(false);

        //changeProduct ligger i Main
        this.props.changeProduct(this.props.currentProduct,description,price);
    };

    handleTextFieldChange = (event) => {
        this.setState({ textFieldContent: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <IconButton className={classes.settingsButton} onClick={this.handleClickOpen}>
                    <Settings className={classes.settingsButtonIcon} />
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{this.props.currentProduct.navn}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Her kan du endre på prisen og beskrivelsen til produktet du har valgt.
                        </DialogContentText>
                        <TextField
                            id="description"
                            label="Produkt beskrivelse"
                            value={this.state.textFieldContent}
                            placeholder="Ingen beskrivelse for øybelikket"
                            onChange={this.handleTextFieldChange}
                            multiline
                            className={classes.textField}
                            margin="normal"
                        /><br />
                        <TextField
                            margin="normal"
                            id="price"
                            label="Pris"
                            type="number"
                            className={classes.textFieldNumber}
                            placeholder={"" + this.props.currentProduct.pris}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Avbryt
            </Button>
                        <Button onClick={this.handleChange} color="primary">
                            Endre
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
ChangeProductDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeProductDialog)