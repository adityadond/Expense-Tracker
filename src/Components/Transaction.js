import React from "react";
import {
  ListItem,
  ListItemText,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyle = makeStyles({
  list: {
    display: "flex",
    marginTop: 10,
    border: "1px solid #F6F6F6",
  },
  component:{
      cursor:'pointer',
  }
});

function Transaction({ transaction ,deleteTransaction}) {
  const classes = useStyle();
  const sign = transaction.amount >= 0 ? "₹" : "-₹";
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount >= 0 ? "Green" : "Red";
  
  return (
    <ListItem
      style={{ background: `${color}`, color: "#fff" }}
      className={classes.list}
    >
      <ListItemIcon>
      <DeleteIcon className={classes.component}onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText primary={transaction.text}></ListItemText>
      <ListItemText primary={transaction.amount}></ListItemText>
    </ListItem>
  );
}

export default Transaction;
