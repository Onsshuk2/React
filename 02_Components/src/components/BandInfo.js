import React from 'react';
import Album from './Album';

const BandInfo = () => {
  return (
    <div className="band-info">
      <h1 className="band-title">Океан Ельзи</h1>
      <p className="band-description">
      Океа́н Е́льзи (або скорочено — О. Е.) — український рок-гурт, створений 12 жовтня 1994 року у Львові. Лідером та вокалістом гурту є Святослав Вакарчук. Океан Ельзи вважається найвідомішим та найбільш успішним українським музичним гуртом. Усього на території України продано понад мільйон дисків ОЕ
      </p>
      <h2>Учасники гурту:</h2>
      <ul className="band-members">
        <li>Святослав Вакарчук (вокал, гітара)</li>
        <li>Павло Гудімов (гітара)</li>
        <li>Денис Дудко (барабани)</li>
        <li>"Юрій Шкода (бас-гітара)</li>
      </ul>
      <h2>Відомі альбоми:</h2>
      <div className="albums-container">
        <Album
          title="Без меж"
          cover="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/OKEAN_TITULNI_2016.jpg/520px-OKEAN_TITULNI_2016.jpg"
        />
        <Album
          title="Модель"
          cover="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Okean_Elzy_at_NSC_Olimpiyskiy_0195.jpg/440px-Okean_Elzy_at_NSC_Olimpiyskiy_0195.jpg"
        />
        <Album
          title="Суперсиметрія"
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTutvrHVxaolLxImcdqs-ShvB-40UBR88V5Q&s"
        />
      </div>
    </div>
  );
};

export default BandInfo;
