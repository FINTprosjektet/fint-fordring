class EmployerApi {
    static fetchEmployers(orgId) {
        const url = '/oppdragsgiver';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }
}

export default EmployerApi