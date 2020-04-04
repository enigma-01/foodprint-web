import React from "react"

function SignedOutLinks(){
    return(
        <div className = "notLogged">
            <a href = "/">Log In</a>
            <a href = "/">Sign Out</a>
        </div>
    )
}

export default SignedOutLinks;