import React, {useEffect, useMemo, useState} from 'react';

const Row = ({gid, gname, gprice, setTotalSum, setTotalQuantity,setCheckValue}) => {

    const [valueInput, setValueInput] = useState(0)

    useEffect(()=>{
        setCheckValue(valueInput)
    },[gname])

    const summ = useMemo(() => {
        return gprice * valueInput
    }, [valueInput])

    useEffect(() => {
        setTotalQuantity(
            prev => ([
                ...prev.map(item => {
                    if(item.id === gid){
                        item.quantity = Number(valueInput)
                    }
                    return item
                })
            ])
        )

        setTotalSum(prev => ([
                ...prev.map(item => {
                    if(item.id === gid){
                        item.sum = summ
                    }
                    return item
                })
            ]))
    },[summ, valueInput, setTotalSum, setTotalQuantity])



    return (
        <tr>
            <th>{gid}</th>
            <th>{gname}</th>
            <th>{gprice}</th>
            <th><input type="number" value={valueInput} onChange={(e) => setValueInput(e.target.value)}/></th>
            <th>{summ}</th>
        </tr>
    );
};

export default Row;