import Card from './components/Card';
import PanelItem from './components/PanelItem';
import DefaultField from './components/DefaultField';

Nova.booting((Vue, router, store) => {
  Vue.component('Card', Card);
  Vue.component('PanelItem', PanelItem);
  Vue.component('DefaultField', DefaultField);
});
