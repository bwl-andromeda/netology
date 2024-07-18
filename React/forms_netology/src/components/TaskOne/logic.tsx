import './logic.css';
import React, { useState } from 'react';

function ConvectorRGB() {
    const [hex, setHex] = useState('');
    const [rgb, rgbHex] = useState('');
    const [err, setErr] = useState('');

    const convert = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        rgbHex(`RGB(${r}, ${g}, ${b})`);
    };

    const onValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (/^#([a-fA-F0-9]{6})$/.test(value)) {
            setErr('');
            setHex(value);
            convert(value);
        } else {
            setHex(value);
            if (value.length === 7) { setErr("Ошибка!") ; }
            if (value.length !== 7) { setErr("-----"); }
        }
    }

    return (
        <div className="container">
            <form className="convector" style={{ backgroundColor: rgb }}>
                <input className='hex' placeholder="HEX code" onChange={onValue} value={hex} spellCheck="false" />
                <label className='rgb' htmlFor="color"> {err ? err : rgb}</label>
            </form>
        </div>
    )
}

export default ConvectorRGB;