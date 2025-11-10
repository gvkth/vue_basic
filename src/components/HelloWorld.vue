<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>Welcome to your Vue.js app.</p>
    <h2>{{ message }}</h2>
    
    <div class="counter-section">
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>

    <div class="todo-section">
      <input v-model="newTodo" @keyup.enter="addTodo">
      <button @click="addTodo">Add Todo</button>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="removeTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  // Data properties
  data() {
    return {
      title: 'Vue Component Demo',
      message: 'This is a simple Vue component.',
      count: 0,
      newTodo: '',
      todos: []
    }
  },

  // Computed properties
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },

  // Methods
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push(this.newTodo)
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  },

  // Lifecycle hooks
  created() {
    console.log('Component created')
  },
  mounted() {
    console.log('Component mounted')
  },
  beforeDestroy() {
    console.log('Component will be destroyed')
  }
}
</script>

<style scoped>
.hello {
  text-align: center;
  margin-top: 20px;
}

.counter-section {
  margin: 20px 0;
  padding: 20px;
  background-color: #f5f5f5;
}

.todo-section {
  margin: 20px 0;
  padding: 20px;
  background-color: #eef;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>