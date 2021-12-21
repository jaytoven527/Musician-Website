import{AppContactFormInput} from './example';
import {useMemo} from 'react';

type Params = {
    data:           AppContactFormInput;
    onValueChange:  (name:keyof AppContactFormInput, value: any) => {};
}

function ControlledContactInfoForm({data, onValueChange: update }:Params) {
    return (
        <div>
            <input 
                value={data.name} 
                onChange={e => update('name', e.target.value)}
                placeholder={'Please enter your name'}  
            />
            <input 
                value={data.email} 
                onChange={e => update('email', e.target.value)}
                placeholder={'Please enter your email'}  
            />
            <textarea
                value={data.message} 
                onChange={e => update('message', e.target.value)}
                placeholder={'Please enter your message'}  
            />
        </div>
    )
}

function Form () {
    const data = useMemo<AppContactFormInput>(() => ({
        name: '',
        email: '',
        message: ''
    }));

    const update = useCallback((elName: keyof AppContactFormInput, value:any) => {
        data[elName] = value;
    }, [data])

    return <ControlledContactInfoForm data={data} onValueChange={update} />
}