import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncAction/customers';
import { asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator } from './store/countReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchUsers } from './store/userReducer';

function App() {
  /*const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);*/
  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch();

  /*const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  };

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer))
  };*/

  /*const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  };*/
  

  return (
    <div className="app">
      <div className="count">{count}</div>
      <div className="btns">
        {/*<button className="btn" onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button className="btn" onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
        <button className="btn" onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button className="btn" onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>*/}
        <button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>Инкремент++</button>
        <button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>Декремент--</button>
        <button className="btn" onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
      </div>
      {users.length > 0 ?
        <div className="users">
          {/*customers.map(customer => 
            <div className="user" onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>  
          )*/}
          {users.map(user => 
            <div className="user">
              {user.name}
            </div>
          )}
        </div>
        :
        <div style={{fontSize: '2rem', marginTop: 20}}>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
};

export default App;