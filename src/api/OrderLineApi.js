class OrderLineApi {

    static fetchOrderLines(orgId) {
        const url = '/orderline';
        return fetch(url, {
            method: 'GET',
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }
}

export default OrderLineApi