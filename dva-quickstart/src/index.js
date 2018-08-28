import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';


// 1. Initialize
const app = dva({
  history: createHistory()
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/counter').default);
app.model(require('./models/example').default);
app.model(require('./models/user').default);




// 4. Router
//require能在下面引入，import只能在上面引用
app.router(require('./router').default);

// 5. Start
app.start('#root');
