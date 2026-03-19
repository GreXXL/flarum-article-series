import registerModels from '../common/registerModels';
import addIsArticleSeriesToEditTagModal from './addIsArticleSeriesToEditTagModal';

app.initializers.add('grexxl/flarum-article-series', () => {
  registerModels();
  addIsArticleSeriesToEditTagModal();
});
