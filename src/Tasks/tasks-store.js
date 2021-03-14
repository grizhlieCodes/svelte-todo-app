import {writable} from 'svelte/store'

const allTasks = writable([
    {
        id: Math.random().toString(),
        task: "Clean room",
        date: "10 Mar",
        tags: ["Home 🏡", "Couple 👫","LoveyDovey 😍"],
        done: false
      },
      {
        id: Math.random().toString(),
        task: "Finish coding project",
        date: "10 Mar",
        tags: ["Coding 🤓", "Mastery 🌄"],
        done: false
      }
])

const customTasks = {
    subscribe: allTasks.subscribe,

    addTask: (taskData) => {
        allTasks.update(tasks => {
            return [...tasks, taskData]
        })
    },

    updateDoneTasks: (id) => {
        allTasks.update(tasks => {
            let updatedTask = {...tasks.find(t => t.id === id)}
            updatedTask.done = !updatedTask.done
            const taskIndex = tasks.findIndex(t => t.id === id)
            const updatedTasks = [...tasks]
            updatedTasks[taskIndex] = updatedTask
            return updatedTasks
         
        })
    },

    deleteTask: (id) => {
        allTasks.update(tasks => {
            const newTasks = tasks.filter(t => t.id !== id)
            return [...newTasks]
        })
    }
}

export default customTasks;