// The following program will show error when you uncomment line 10:
// TypeError: message is not a function
// But, it won't show us error while coding, and will only throw an error at the runtime.

const message = 'Hello world';

message.toLowerCase();

// uncomment below line, it will show you errors
// message();

export {};
