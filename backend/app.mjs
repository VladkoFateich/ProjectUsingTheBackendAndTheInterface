import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 7000;

//logger info in console
app.use(morgan('tiny'));

//convert Json in obj.js req.body
app.use(express.json());

//parsing string
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res) => {
  const data = {
    title: 'Header page',
    subtitle:
      'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word.',
    item: 'item',
    content: {
      url: 'https://s1.1zoom.ru/big3/399/339975-svetik.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    footer: {
      copyright: 'copyright',
      inst: 'https://img.icons8.com/?size=100&id=32323&format=png&color=000000',
      pt: 'https://img.icons8.com/?size=100&id=63676&format=png&color=000000',
      fb: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000',
      yt: 'https://img.icons8.com/?size=100&id=19318&format=png&color=000000',
    },
  };
  console.log(req.body);
  return res.json({ data });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
