import './forms.css'
import React, { useState } from "react";


interface TrainingData {
    date: string;
    kilometers: string;
}

export default function Forms() {
    const [data, setData] = useState<TrainingData[]>([]);
    const [date, setDate] = useState<string>('');
    const [km, setKm] = useState<string>('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (date && km) {
            const allDate = [...data];
            const oneAllDate = allDate.find(item => item.date === date);

            if (oneAllDate) {
                oneAllDate.kilometers = (+oneAllDate.kilometers + parseFloat(km)).toString();
            } else {
                allDate.push({ date, kilometers: parseFloat(km).toString() });
            }

            allDate.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            setData(allDate);
            setDate('');
            setKm('');
        }
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (/^\d{4}-\d{2}-\d{2}$/.test(inputValue)) {
            setDate(inputValue);
            return;
        }
        console.log('Ошибка формата даты', inputValue);
    }

    const handleKmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (/^\d{0,3}(\.\d{0,3})?$/.test(inputValue)) {
            setKm(inputValue);
            return;
        }
        console.log('Неправильный формат км', inputValue);
    }

    const formatDate = (inputDate: string) => {
        let dateEdit = inputDate;

        if (/^\d{4}-\d{2}-\d{2}$/.test(inputDate)) {
            const dateParts = inputDate.split('-');
            dateEdit = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
        }

        return dateEdit;
    }

    const deleteData = (index: number) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    return (
        <div className="text-list">
            <form className='form-tracker' onSubmit={onSubmit}>
                <div className='date-text'>Дата (ДД.ММ.ГГГГ)</div>
                <input className="date" type="date" value={date} onChange={handleDateChange} />
                <div className='km-text'>Пройденно км</div>
                <input className="km" placeholder="километры" value={km} onChange={handleKmChange}/>
                <button className="but" type="submit">OK</button>
            </form>

            <div className='table-tracker'>
                <div className='header'>
                    <div className='date-text-table'>Дата (ДД.ММ.ГГГГ)</div>
                    <div className='km-text-table'>Пройденно км</div>
                    <div className='action-table'>Действия</div>
                </div>
                <table>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{formatDate(item.date)}</td>
                                <td>{item.kilometers}</td>
                                <span onClick={() => deleteData(index)} className='list-button'>✘</span>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
