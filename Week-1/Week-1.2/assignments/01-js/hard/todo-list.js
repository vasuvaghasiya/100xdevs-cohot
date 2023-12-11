/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todos = [];
    this.index=0;
  }
  add(todo){
    this.todos.push(todo);
  }

  //splice method is used to remove element from index.
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }
  
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      return null;
    }
  }
  
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }
  
  getAll() {
    return this.todos.slice(); // Return a copy of the todos to prevent direct modification
  }

  size(){
    return this.todos.length;
  }
  clear() {
    this.todos = [];
  }
}




const todo1= new Todo();
todo1.add("exercise");
todo1.add("meditation");
console.log(todo1.get(0));
console.log(todo1.get(1));
todo1.remove(1);
// console.log(todo1.get(1));
console.log(todo1.getAll());
console.log(todo1.size());
// todo1.clear();
console.log(todo1.getAll());
todo1.update(0,"task2");
console.log(todo1.getAll());
module.exports = Todo;
