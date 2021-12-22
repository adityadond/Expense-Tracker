import React from "react";
import { Card, CardContent, Typography,Box ,makeStyles} from "@material-ui/core";

const useStyle=makeStyles({
    container:{
        display:'flex',
        '& > *': {
            flex: 1,
            padding: 10
    }},
    income: {
        color: 'green'
    },
    expense: {
        color: 'red'
    }
})

function ExpenseCard({transactions}) {
    const classes=useStyle()
    const amount=transactions.map(transaction=>transaction.amount)
    const income=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
    const expense=(amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2)
  return (
    <Box className={classes.container}>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography className={classes.income}>{income}INR</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography className={classes.expense}>{expense}INR</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ExpenseCard;
