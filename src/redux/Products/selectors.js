export const selectProducts = state => state.products.products;

export const selectCategoriesProducts = state => state.products.category;

export const selectFilter = state => state.products.filter;

export const selectAddModal = state => state.products.isAddModalOpen;

export const selectSuccessModal = state => state.products.isSuccessModalOpen;
export const selectInfo = state => state.products.info;
