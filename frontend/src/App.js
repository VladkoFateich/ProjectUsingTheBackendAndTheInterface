import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dataBase, setDataBase] = useState();
  useEffect(() => {
    fetch('http://127.0.0.1:7000')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataBase(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {dataBase && (
        <>
          <header>
            <ul>
              <li>
                <a href="#">{dataBase.data.item}</a>
              </li>
              <li>
                <a href="#">{dataBase.data.item}</a>
              </li>
              <li>
                <a href="#">{dataBase.data.item}</a>
              </li>
              <li>
                <a href="#">{dataBase.data.item}</a>
              </li>
            </ul>
            <h1>{dataBase.data.title}</h1>
            <p>{dataBase.data.subtitle}</p>
          </header>
          <main>
            <section class="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>
                {dataBase.data.content.text}
                {dataBase.data.content.text}
              </p>
            </section>
            <section class="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
            <section className="block">
              <img src={dataBase.data.content.url} alt="img" />
              <p>{dataBase.data.content.text}</p>
            </section>
          </main>
          <footer>
            <p className="copyright">{dataBase.data.footer.copyright}</p>
            <div className="socialBox">
              <a className="social" href="#">
                <img
                  className="socialImg"
                  src={dataBase.data.footer.inst}
                  alt="img"
                />
              </a>
              <a className="social" href="#">
                <img
                  className="socialImg"
                  src={dataBase.data.footer.pt}
                  alt="img"
                />
              </a>
              <a className="social" href="#">
                <img
                  className="socialImg"
                  src={dataBase.data.footer.fb}
                  alt="img"
                />
              </a>
              <a className="social" href="#">
                <img
                  className="socialImg"
                  src={dataBase.data.footer.yt}
                  alt="img"
                />
              </a>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
