import testComponent from '../components/test-component/test-component';
import Dropdown from '../../core/components/dropdown/dropdown';
import {$, jQuery} from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = new Dropdown('.header', {
        show: true
    });
});
