import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import { grey } from '@material-ui/core/colors';



const ArmorStats = (props) => {

    const data = props.armor;
    return (
        <div>
            <ClickAwayListener onClickAway={this.handleClickAway}>
                <div>
                    <Button onClick={this.handleClick}>Open menu</Button>
                    {open ? (
                        <Paper className={classes.paper}>
                            {data.name}
                        </Paper>
                    ) : null}
                </div>
            </ClickAwayListener>
        </div>
    )
}

export default ArmorStats;