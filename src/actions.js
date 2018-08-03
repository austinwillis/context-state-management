export function open({ open, ...res }) {
    return {
        ...res,
        open: !open
    }
}

export function updateText(state, { target: { value } }) {
    return {
        ...state,
        text: value
    }
}

const data = [1, 2, 3]

export function loadData(state) {
    return {
        ...state,
        loadingData: true
    }
}

const fetchData = () => new Promise(resolve => setTimeout(() => resolve(data), 500));

export async function getData(state, _, dispatch) {
    dispatch(loadData)(state, _, dispatch);
    const d = await fetchData();
    return s => ({
        ...s,
        data: d,
        loadingData: false
    });
}
  