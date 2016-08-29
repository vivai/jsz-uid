# jst-uid

Generators for unique and universally unique ids.

## API

### uid
```
uid(): string
```
Returns a unique id composed from a uuid and a counter.

Example:
```
console.log(uid()); // 5c4d369a-5973-4946-804d-3bd875900383:0
console.log(uid()); // 5c4d369a-5973-4946-804d-3bd875900383:1
```

### uuid
```
uuid(): string
```
Create and return a "version 4" RFC-4122 UUID string.

Example
```
console.log(uuid()); // 2c6e369a-5973-4946-804d-3bd875900383
```
