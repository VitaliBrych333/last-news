class Request {
	constructor(url, type, data) {
	   this.url = url
	   this.type = type
	   this.data = data;
	}

	sendRequest() {
		return fetch(this.url, { method: this.type, body: this.data ? JSON.stringify(this.data): undefined });
	}
}

export default class RequestsFactory {
    createRequest(url, type, data = null) {
        switch(type) {
		    case 'GET':
			    return new Request(url, type, data)
		    case 'PUT':
			    return new Request(url, type, data)
			case 'POST':
				return new Request(url, type, data)
			case 'DELETE':
				return new Request(url, type, data)
	    }
    }
}
