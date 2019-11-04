class Request {
	constructor(url, type) {
	   this.url = url
	   this.type = type
	}

	sendRequest() {
		return fetch(this.url, { method: this.type});
	}
}

export default class RequestsFactory {
    createRequest(url, type) {
        switch(type) {
		    case 'GET':
			    return new Request(url, type)
		    case 'PUT':
			    return new Request(url, type)
			case 'POST':
				return new Request(url, type)
			case 'DELETE':
				return new Request(url, type)
	    }
    }
}
