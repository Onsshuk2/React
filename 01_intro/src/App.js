
import './App.css';

function App() {
  return (
    
    <div className="conteiner">
      <p className="App">
        My Favorite book 
      </p> 
      <div className="conteiner-info">
        <div>
          <img  src="https://bookchef.ua/upload/iblock/2e0/2e0f29055e69cf4b090024294897004a.png"/>
        </div>
      <div className="info">
      <p>Назва: Переломний рік </p>
      <p>Автор: Бріанна Вест</p>
      <p>Жанр: Нон-фікшн</p>
      <p>Кількість сторінок: 384</p>
      </div>
      
      
    </div>
    <p className="reviews-title">Рецензії:</p>
  <div className="reviews">
    <div className="review">
      <p><strong>Ірина:</strong> Це найкраща книга, яку я читала цього року! Дуже надихає.</p>
    </div>
    <div className="review">
      <p><strong>Олександр:</strong> Чудова книга, яка змушує задуматися про важливі речі у житті.</p>
    </div>
    <div className="review">
      <p><strong>Марія:</strong> Написано дуже легко і доступно. Рекомендую всім!</p>
    </div>
  </div>

    </div> 
    
  );
}

export default App;
