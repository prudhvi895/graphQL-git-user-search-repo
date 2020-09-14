import React, {useState} from 'react';
import 'styled-components/macro';

const SearchBar = ({onSubmit}) => {
    const [message, setMessage] = useState('');
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(message);
    };

    return (
        <>
            <form onSubmit={onFormSubmit}
                css={{
                    alignSelf: 'stretch',
                    background: '#eaeaea',
                    borderRight: '1px solid #e9e9e9',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 16,
                    justifyContent: 'space-between',
                }}
            >
                <label css={{
						color: 'rgb(210, 54, 105)',
						textAlign: 'center',
						fontSize: 48,
						marginTop: 12,
					}}>
                        Github User Repo Search</label>
                <input type="text"
                    css={{
						marginBottom: 16,
						borderRadius: 4,
						fontSize: 18,
						fontFamily: 'monospace',
						padding: '8px 16px',
						border: '1px solid #424242',
						boxShadow: 'none',
                        width: '100%',
                        maxWidth: '400px',
						'&:focus, &:hover': {
							borderColor: 'rgb(210, 54, 105)',
						},
					}} 
                    value={message} 
                    onChange={event => {setMessage(event.target.value)}}/>
            </form>
        </>
    )
};

export default SearchBar;
