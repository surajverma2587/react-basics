import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// global.console = {
//   error: jest.fn(),
//   log: jest.fn()
// }