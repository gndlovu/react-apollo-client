import React from 'react'

export default function Loader() {
    const styles = {
        marginBottom: "16px",
        paddingTop: "2px",
        paddingBottom: "2px",
        marginTop: "50px"
    };

    return (
        <div
            className="three-o-loading text-center"
            style={styles}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
