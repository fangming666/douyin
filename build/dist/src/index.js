import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import dva from "dva";
import createHistory from 'history/createBrowserHistory';
//@ts-ignore
import createLoading from "dva-loading";
var app = dva({
    history: createHistory,
    onError: function (err, dispatch) {
        console.error(err);
    },
});
app.use(createLoading('loading'));
app.model(require('./models/app').default);
app.router(require('./router').default);
app.start("#root");
registerServiceWorker();
//# sourceMappingURL=index.js.map