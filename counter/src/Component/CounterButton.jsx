import PropTypes from 'prop-types'
export default function CounterButton(props){
    return (
        <>
            <button style={button} onClick={() => props.incrementCounter(props.val)}>+{props.val}</button>
            <button style={button} onClick={() => props.decrementCounter(props.val)}>-{props.val}</button>
        </>
        
    )
        

}

const button = {
    padding:10,
    margin:10,
    fontSize: 10,
    color: 'white',
    backgroundColor: "#373485",
    borderRadius: 5
}

CounterButton.propTypes = {
    val: PropTypes.number
}