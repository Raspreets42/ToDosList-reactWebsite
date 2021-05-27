import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: "relative",
        bottom: "0px" ,
        width: "100%"
    }
    return (
        <div className="bg-dark text-light my-3 pt-3 pb-2" style={footerstyle} >
            <p className="text-center">
                Copyright &copy; MyTodoList.com
            </p>
        </div>
    )
}
