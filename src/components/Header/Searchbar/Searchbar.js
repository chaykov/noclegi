import { useState } from 'react';

function Searchbar(props){
    const [term, setTerm] = useState('');
    const search = () => {
        props.onSearch(term);
    }

    const onKeyDownHandler = e => {
        if(e.key === 'Enter'){
            search();
        }
    }

    return(
        <div className='d-flex'>
            <input 
                value={term}
                onKeyDown={onKeyDownHandler}
                onChange={e => setTerm(e.target.value)}
                type="text" 
                placeholder="Szukaj..." 
                className='form-control' />
            <button 
                onClick={search}
                className='ms-1 btn btn-secondary'>
                    Szukaj
            </button>
        </div>
    )
}

export default Searchbar;