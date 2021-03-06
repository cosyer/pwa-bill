import type from "./mutation_type";
export default {
  changeHeader({ commit }, obj) {
    commit(type.CHANGE_HEADER, obj);
  },
  changeClasses({ commit }, id) {
    commit(type.CHANGE_CLASSES, id);
  },
  toggleAddModal({ commit }, isShow) {
    commit(type.TOGGLE_ADD_MODEAL_SHOW, isShow);
  },
  addMoneyList({ commit }, list = {}) {
    commit(type.UNSHIFT_MONEY_LIST, list);
  },
  removeMoneyItem({ commit }, item) {
    commit(type.RMEOVE_MONEY_ITEM, item);
  },
  changeRange({ commit }, range) {
    commit(type.CHANGE_RANGE, range);
  },
  changeTitleDate({ commit }, titleDate) {
    commit(type.CHANGE_TITLE_DATE, titleDate);
  },
  changeDatePickerShow({ commit }, show) {
    commit(type.CHANGE_DATEPICKER_SHOW, show);
  }
};
