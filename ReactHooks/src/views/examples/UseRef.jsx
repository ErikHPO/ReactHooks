import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef()
    const myInput2 = useRef()

    useEffect(function(){
        count.current +=1
        myInput2.current.focus()
    }, [value1] )
    useEffect(function(){
        count.current +=1
        myInput1.current.focus()
    }, [value2] )

    const merge = function (input1, input2){
        return [...input1].map((e,i) =>{
          return  `${e}${input2[i] ||""}` }).join("")
    }
    

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <input type="text" className="input" ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)}/>
                <span className="text">Valor: {merge(value1,value2)}</span>
                <span className="text red">[{count.current}]</span> 

            </div>
            <SectionTitle title="Exercicio #02"/>
            <div>
                <input type="text" className="input" ref={myInput2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
