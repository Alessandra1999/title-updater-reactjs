import { useState, useEffect } from 'react';

function TitleUpdater() {
    const titles = ["Um título legal", "Outro título legal", "Um título bacana", "Outro título bacana", "Um título show de bola", "Mais um título show de bola", "Um título qualquer", "Qualquer coisa", "Acabou a criatividade"];
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = titles[value];
    }, [value, titles]);

    const next = () => setValue((value + 1) % titles.length);
    const prev = () => setValue((value - 1 + titles.length) % titles.length);

    return (
        <div>
            <h1>Título: {titles[value]}</h1>
            <button onClick={prev}>Título Anterior</button>
            <button onClick={next}>Próximo Título</button>
        </div>
    )
}

export default TitleUpdater;