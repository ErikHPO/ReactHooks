import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num){
    const n = parseInt(num)
    if(n<0) return 0;
    if(n===0) return 1;
    return calcFatorial(n-1) *n
}

function isPair(num){
    const n = parseInt(num)
    if(n % 2 === 0) return 'Par' 
    else return 'Impar'
}
const UseEffect = (props) => {
    const [number,setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status,setStatus] = useState()

    useEffect(function(){
        setFatorial(calcFatorial(number))
    },[number])

    useEffect(
        function(){
            setStatus(isPair(number))
        } , [number]
    )

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial}</span>
                <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.valueAsNumber)} />
            </div>
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
            <span className="text">Status:</span>
            <span className="text red">{status}</span>

            </div>
        </div>
    )
}

export default UseEffect
