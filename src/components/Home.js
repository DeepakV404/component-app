import React , {useState} from 'react'

function Home() {
    const [count, setCount] = useState(0);
    const [name, setname] = useState('Guest');
    const [values, setvalues] = useState({firstname:"", lastname:""})
    const [submitted, setsubmitted] = useState(false);

    const addCount = () => {
        setCount(count+1)
    } 

    const sayName = () => {
        setname('Deepak')
    }
    const logout = () => {
        setCount(0)
        setname('Guest')
    }
    //Using the previous state value as a parameter to increase by five counts.
    const increaseByFive = () => {
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1)
        }
    }

    const onfirstnameChange = (event) => {
        setvalues({
            ...values,
            firstname: event.target.value
        })
    }
    const onLastnameChange = (event) => {
        setvalues({
            ...values,
            lastname: event.target.value
        })
    }

    const submit = () => {
        setsubmitted(true)
    }

    const oops = () => {
        return <h1>form not submitted</h1>
    }

    return (
        <div>
            <h1>Home</h1>

            <h1>{count}</h1>
            <button onClick={addCount}>
                Click to increase
            </button>
            <button onClick={increaseByFive}>
                increase by 5
            </button>

            <h1>Welcome home {name} </h1>
            <button onClick={sayName}>
                Hello
            </button>
            <button onClick={logout}>Logout</button>

            <form>
                <input placeholder="FirstName" value={values.firstname} onChange={onfirstnameChange}/>
                <input placeholder="Lastname" value={values.lastname} onChange={onLastnameChange}/>
            </form>
            <button onClick={submit}>Submit</button>
            
            <br/>
            {submitted ? <h1>{values.firstname} {values.lastname} your form got submitted</h1>: oops}
        </div>
    )
}

export default Home
