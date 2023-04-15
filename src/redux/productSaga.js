
import {put, takeEvery} from 'redux-saga/effects'
import { LIST_PRODUCTS, SEARCH_PRODUCTS, SET_PRODUCTS } from './constant';

function* productSaga(){
    yield takeEvery(LIST_PRODUCTS,getProducts);
    yield takeEvery(SEARCH_PRODUCTS,searchProducts);
}

function* getProducts(){
    let data =yield fetch('http://localhost:5050/products');
    data =yield data.json();
    yield put({type:SET_PRODUCTS,data})
}
function* searchProducts(data){
    let result =yield fetch(`http://localhost:5050/products?q=${data.query}`);
    result =yield result.json();
    yield put({type:SET_PRODUCTS,data:result})
}

export default productSaga;