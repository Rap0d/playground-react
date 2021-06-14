import React from "react";

function Conditional({name, isSpecial}) {
    return (
        <>
            <div>
                {/*단축 연산 &&*/}
                안녕하세요 {name}
                {isSpecial && <b>***</b>}
            </div>
        </>
    )
}

Conditional.defaultProps = {
    name: 'unknown'
}

export default Conditional