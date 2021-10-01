import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Button(props) {
    const history = useHistory();
    const handleLogin = () => history.push('/login');
    return (
         <a onClick={handleLogin} className="cursor-pointer px-6 py-2 w-min rounded-lg bg-weta hover:bg-gray-600 uppercase tracking-widest text-xs font-medium text-white">{props.text}</a>
    )
}
