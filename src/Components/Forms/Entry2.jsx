

const Entry2 = props => {

    const changeEmail = e => {

        props.changeEmail('xxx');
    }

    return (
        <>
            <h1>Entry2222</h1>
            <button onClick={changeEmail}>{props.email}</button>
        </>
    )
}

export default Entry2;