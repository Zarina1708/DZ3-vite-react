import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {

  const dispatch = useDispatch()

  const user = useSelector(state=>state.user);


    const handleSubmit = (key, value) => {
      dispatch({
        type: 'USER_SUBMIT',
        payload: { key, value }
      });
    }


  return (
    <div>

      <form >

        <label>Имя:</label>
        <br />
        <input type="text" placeholder='name' onChange={e => handleSubmit('name', e.target.value)}/>
        <br/>
        <label>Возраст:</label>
        <br/>
        <input type="number" placeholder='age'  onChange={e => handleSubmit('age', e.target.value)}/>
        <br/>
        <select id='gender'  onChange={e => handleSubmit('gender', e.target.value)}>
          
          <option value=''>Выберите пол</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <button type="submit">go</button>
      </form>

      <div style={{margin: '150px'}}>
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <p>Пол: {user.gender}</p>
      </div>
      
    </div>
  )
}

export default App
