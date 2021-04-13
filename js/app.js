const clearContents = (element) => {
  element.value = '';
};

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('hello excuseme app started');

  let excuses = [
    'Zostawiłem w domu włączone żelazko.',
    'Moja babcia miała wypadek, muszę lecieć.',
    'Współlokator zamknął mnie w mieszkaniu.',
    'Mój kot zwraca kłaczki.',
    'Pies zjadł mi pracę domową.',
    'Jest ciężko. To chyba żołądkowa grypa.',
    'Zgubiłem portfel, nie mam kasy.',
    'Pomagałem starszej pani przejść przez jezdnię.',
    'Muszę rano wstać.',
    'Autobus odjechał mi sprzed samego nosa.',
    'Boli mnie głowa.',
    'Mieszam bigos łokciem.',
    'Ziobro prześladuje mi rodzinę.',
    'Trzymam tapetę, żeby szczeliny między paskami się nie rozjechały.',
    'Właśnie przyszedł sąsiad z dołu i mówi, że zalałem mu mieszkanie.',
    'Musiałam/łem zabrać robotę do domu. Koniec kwartału coraz bliżej i trzeba jakoś nadgonić te targety.',
    'Od rana kicham i kaszlę, a teraz na dodatek skoczyła mi temperatura.',
    'Wykupiłam/łem dobowy dostęp do zalukaj i chcę wykorzystać go do granic możliwości.',
    'Oglądam TV i wypisuję absurdy, których nie powstydziłby się Bareja.',
    'Montuję nową pralkę. Jestem na 83 stronie instrukcji, a zostało jeszcze 200.',
    'Szybkowar eksplodował i śmiertelnie przestraszył mojego psa, przez co muszę zostać w domu.',
    'Pomyliłam/łem puszki i zjadłam/łem kocią karmę zamiast tuńczyka i bardzo źle czuje.',
    'Mam lepsze rzeczy do roboty.',
    'Użyłam/łem kremu depilacyjnego i cierpię z powodu oparzeń chemicznych.',
    'Cały dzień levelovałam/łem w grze i jestem za bardzo zmęczona/y.',
    'Eskorta rządowa rozwaliła mi samochód.',
    'Nie mam czasu.',
    'W moim bucie jest wąż.',
    'Nie chce mi się.',
  ];

  const regex = new RegExp('(?:[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+ ){2}[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+'); // regexp at least 3 words

  const mainButton = document.getElementById('main-btn');
  const addButton = document.getElementById('add-btn');
  const closeButton = document.getElementById('modal-close-btn');
  const modalAddButton = document.getElementById('modal-add-btn');

  const getExcuse = () => {
    const randomNumber = Math.floor(Math.random() * excuses.length);
    const excuseParagraph = document.getElementById('excuse');
    excuseParagraph.innerHTML = excuses[randomNumber];
    const excuseCopy = excuseParagraph.cloneNode(true);
    excuseParagraph.parentNode.replaceChild(excuseCopy, excuseParagraph); // dla uruchumienia animacji przy kazdej nowej wymowwce
  };

  const setBgColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
  };

  const showModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.add('show-element');
  };

  const hideModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('show-element');
  };

  const getInputValue = () => {
    const inputValue = document.getElementById('modal-excuse-input').value;
    return inputValue;
  };

  

  const checkExpression = (pattern, expression) => {
    if (pattern.test(expression)) {
      return true;
    } else {
      return false;
    }
  };

  mainButton.addEventListener('click', setBgColor);
  mainButton.addEventListener('click', getExcuse);
  addButton.addEventListener('click', showModal);

  window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    e.target == modal ? modal.classList.remove('show-element') : false;
  });

  window.addEventListener('touchstart', (e) => {
    const modal = document.getElementById('modal');
    e.target == modal ? modal.classList.remove('show-element') : false;
  });

  closeButton.addEventListener('click', () => {
    hideAlert();
    hideModal();
  });

  const showAlert = () => {
    const alert = document.getElementById('modal-alert');
    alert.classList.add('show-element');
    const alertCopy = alert.cloneNode(true);
    alert.parentNode.replaceChild(alertCopy, alert);
  };

  const hideAlert = () => {
    const popup = document.getElementById('modal-alert');
    popup.classList.remove('show-element');
  };

  modalAddButton.addEventListener('click', () => {
    const isMatched = getInputValue();
    if (checkExpression(regex, isMatched)) {
      excuses.push(isMatched);
      hideAlert();
      hideModal();
    } else {
      showAlert();
    }
  });
});
