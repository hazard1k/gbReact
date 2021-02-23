import {Messages} from '../Messages'

const App = () => {
    return (
    <div id="test-id"><h2>Hello</h2>
        <Messages messages={['1','2','3']} />
    </div>);
};

export {App};