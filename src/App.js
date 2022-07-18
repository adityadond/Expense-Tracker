import { Typography, makeStyles, Box } from "@material-ui/core";
import "./App.css";
import Balance from "./Components/Balance";
import ExpenseCard from "./Components/ExpenseCard";
import NewTranscation from "./Components/NewTranscation";
import Transcations from "./Components/Transcations";
import { useState } from "react";

const useStyles = makeStyles({
  header: {
    color: "blue",
    fontSize: 35,
    margin: "15px 0",
    textTransform: "uppercase",
  },
  component: {
    background: "#fff",
    width: "800px",
    padding: 10,
    borderRadius: 20,
    display: "flex",

    "& > *": {
      padding: 10,
      width: "50%",
      height: "70vh",
    },
  },
});

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Momos", amount: -20 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -100 },
    { id: 4, text: "Bonus", amount: 1500 },
  ]);
  const classes = useStyles();
  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    console.log(transactions);
  };

  const addTransaction = (transaction) => {
    console.log(transaction);
    setTransactions((transactions) => [transaction, ...transactions]);
  };
  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTranscation addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transcations
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
