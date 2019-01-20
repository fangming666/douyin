import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import dva from "dva"
import createHistory from 'history/createBrowserHistory';


//@ts-ignore
import createLoading from "dva-loading";

const app: any = dva({
    history: createHistory,
    onError(err, dispatch) {
        console.error(err);
    },
});

app.use(createLoading('loading'));
app.model(require('./models/app').default);
app.router(require('./router').default);
app.start("#root");
registerServiceWorker();

