import { LottoList } from "./components/LottoList.js";
import './LottoPurchaseController.js';
import './MyLottoInputController.js';
import { lottoStore } from './store/LottoStore.js';

lottoStore.subscribe((store) => {
  const { lottos, isShowLottoNumbers } = store;
  LottoList(lottos, isShowLottoNumbers);
});

const mt9s = Array.from(document.getElementsByClassName('mt-9'));
mt9s.forEach((el) => {
  // el.classList.add('hide');
});
