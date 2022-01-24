


const Entry1 = props => {

    const changeEmail = e => {

        props.changeEmail('xxx');
    }

    return (
        <>
            <h1>Entry1</h1>
            <button onClick={changeEmail}>{props.email}</button>
        </>
    )
}

export default Entry1;