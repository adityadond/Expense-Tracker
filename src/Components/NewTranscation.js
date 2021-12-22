import { Box, makeStyles, TextField, Typography ,Button} from '@material-ui/core'
import React,{useState} from 'react'

const useStyles=makeStyles({
    container:{
        display:'flex',
        flexDirection:'column'
    },
    button:{
        background: '#445A6F',
        color: '#fff'
    }
})

function NewTranscation({addTransaction}) {
    const classes=useStyles()
    const [text,setText]=useState('')
    const [amount,setAmount]=useState()

    const expenseHandler=(e)=>{
        setText(e.target.value)
    }
    const amountHandler=(e)=>{
        setAmount(e.target.value)
    }

    const newTransaction=()=>{
        const transaction={
            id: Math.floor(Math.random()*10000),
            text:text,
            amount:+amount
        }
        addTransaction(transaction);
    }
    return (
       <Box className={classes.container}>
           <Typography variant="h5">
               New Transaction
           </Typography>
           <TextField label="Enter Expense" onChange={expenseHandler}/>
           <TextField label="Total Amount" onChange={amountHandler}/>
           <Button className={classes.button} variant="container" onClick={newTransaction}>Add new Transaction</Button>
       </Box>
    )
}

export default NewTranscation
