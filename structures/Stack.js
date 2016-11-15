function Stack() {
    this.data = [];
    this.add = push;
    this.push = push;
    this.delete = pop;
    this.pop = pop;
    this.peak = peak;
    this.clear = clear;
    this.length = length;
    this.getData = getData;
}

function push(element) {
    this.data[this.data.length++] = element;
}

function pop() {
    this.data.length--;
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

export default Stack;