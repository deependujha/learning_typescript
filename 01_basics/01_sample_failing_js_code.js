// The following program will fail:
// TypeError: message is not a function
// But, it won't show us error while coding, and will only throw an error at the runtime.

const message = 'Hello world';

message.toLowerCase();

message();
