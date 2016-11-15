function Queue() {
    this.data = [];
    this.add = unshift;
    this.unshift = unshift;
    this.delete = shift;
    this.shift = shift;
    this.peak = peak;
    this.clear = clear;
    this.length = length;
    this.getData = getData;
}

function unshift(element) {
    this.data.unshift(element);
}

function shift() {
    this.data.shift();
}

function peak() {
    return this.data[this.data.length - 1];
}

function clear() {
    this.data = [];
}

function length() {
    return this.data.length;
}

function getData(type) {
    if (type == 'string') {
        return this.data.toString();
    }
    return this.data;
}

export default Queue;