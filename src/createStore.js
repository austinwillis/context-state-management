import createFluxContext from './fluxLib'

const initialState = {
    open: false,
    text: '',
    data: [],
    loadingData: false
}

export default createFluxContext(initialState);