import { Typography, List, Divider, makeStyles, Box } from '@material-ui/core';
import React from 'react'
import Transaction from './Transaction';
const useStyle = makeStyles({
    component: {
        '& > *': {
            marginBottom: 10
        }
    },
    heading: {

    }
})


function Transcations({ transactions , deleteTransaction }) {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
        <Typography variant="h5">Transaction History</Typography>
        <Divider style={{width: '100%'}} />
        <List>
                {
                    transactions.map(transaction => {
                        return <Transaction transaction={transaction}  key={transaction.id} deleteTransaction={deleteTransaction} />
                    })
                }

                
            </List>
        </Box>
    )
}

export default Transcations
