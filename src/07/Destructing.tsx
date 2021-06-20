import {useState} from 'react';

export type ManDestructingType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?: string }>
    address: { street: { title: string } }
}

type PropsType = {
    title: string
    man: ManDestructingType
    food: Array<string>
    car: { model: string }
}

function useDimychState(m: string) {
    return [m, function () {
    }]
}

export const ManComponent: React.FC<PropsType> = ({title, man: {name}, ...props}) => {
    //const {title, man: {name}, ...restProps} = props;  //  restProps остаток пропсов, которые можем прокинуть в следующую компоненту
    // const {title, man: {name}} = props;   // деструктуризация что бы достать вложенный элемент

    const [message, setMessage] = useState('Hello');

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
            {props.car.model}
        </div>
    </div>
}