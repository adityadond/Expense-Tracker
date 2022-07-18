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
    const handleSubmit = e => {
        console.log('handleSubmit ran');
        e.preventDefault(); // 👈️ prevent page refresh
    
        // 👇️ clear all input values in the form
        setText('');
        setAmount('');
      };
    return (
       <Box className={classes.container}>
           <Typography variant="h5">
               New Transaction
           </Typography>
           <form onSubmit={handleSubmit}>
           <TextField label="Enter Expense" value={text} onChange={expenseHandler}/>
           <TextField label="Total Amount" value={amount} onChange={amountHandler}/>
           <Button className={classes.button} type ="submit"  onClick={newTransaction}>Add new Transaction</Button>
           </form>
       </Box>
    )
}

export default NewTranscation
