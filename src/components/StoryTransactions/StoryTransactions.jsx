import PropTypes from "prop-types";
import css from './StoryTransactions.module.css';



export const TransactionHistory = ({ items}) => {

    return <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
    { items.map( transaction => (
              <tr key={transaction.id} className={css.trColor}>
              <td className={css.td}>{transaction.type}</td>
              <td className={css.td}>{transaction.amount}</td>
              <td className={css.td}>{transaction.currency}</td>
              </tr>
        ))}
    </tbody>
  </table>
    };
    
    TransactionHistory.propTypes = {
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                id:  PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                amount:  PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired
            })
            
        )
      };