import React from 'react';

const StatItem = ({ label, value }) => (
    <li>
        {label}: {value}
    </li>
);

export default function Pokemon({ id, Name, type, image, Stats }) {
    const { HP, Speed, Attack, Defense, 'Sp. Attack': SpAttack, 'Sp. Defense': SpDefense } = Stats;

    return (
        <li>
            <img src={image} alt={Name} />
            <h2>[{id}] {Name}</h2>
            <ul className="Types">
                {type.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <ul className='col1'>
                <StatItem label="HP" value={HP} />
                <StatItem label="Speed" value={Speed} />
                <StatItem label="Attk" value={Attack} />
                <StatItem label="Sp. Attk" value={SpAttack} />
                <StatItem label="Def" value={Defense} />
                <StatItem label="Sp. Def" value={SpDefense} />
            </ul>
        </li>
    );
}
