// What would be output for below?
//'use strict';
let user = {
  id: 551,
  name: 'Tom',
  getId() {
    return this.id;
  },
  credentials: {
    id: 120,
    username: 'tom',
    getId() {
      return this.id;
    },
  },
};
console.log(user.getId());
const getId = user.getId;
getId();

/* let obj = {
  name: 'Anil ',
  addLastName: function (x) {
    return this.name + x;
  },
};
console.log(obj);
console.log(obj.addLastName('yadav')); */
