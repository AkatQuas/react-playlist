export default {
    namespace: 'count',
    state: 1,
    reducers: {
        add (count, b) {
            return count + 1;
        },
        minus (count, b, c ) {
            return count - (b.payload || 1);
        }
    }
}