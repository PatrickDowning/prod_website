<template>
    <div>
      <form @submit.prevent="addItem">
        <label>
          <input v-model="newItem" placeholder="What needs to be done?"/>
        </label>
      </form>
      <ul>
        <li v-for="(item, index) in items" :key="index" :class="{'completed': item.completed}">
          {{ item.text }}
          <button @click="removeItem(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newItem: '',
        items: [
          { text: 'Learn Vue', completed: true },
          { text: 'Build a to-do list', completed: false }
        ]
      }
    },
    methods: {
      addItem() {
        this.items.push({
          text: this.newItem,
          completed: false
        })
        this.newItem = ''
      },
      removeItem(index) {
        this.items.splice(index, 1)
      }
    }
  }
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
  }
  </style>