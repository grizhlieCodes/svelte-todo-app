import { writable } from 'svelte/store'

const allTasks = writable([])

function parseTasks() {
    if(localStorage.getItem('tasks')){
        if (JSON.parse(localStorage.getItem('tasks')).length == 0) {
            return
        } else {
            allTasks.update(tasks => {
                return JSON.parse(localStorage.getItem('tasks'))
            })
        }
    } else {
        return
    }
}

window.onload = parseTasks()


const customTasks = {
    subscribe: allTasks.subscribe,

    addTask: (taskData) => {
        allTasks.update(tasks => {
            let updatedTasks = [...tasks, taskData]
            localStorage.clear()
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            return updatedTasks
        })

        allTasks.update(tasks => {
            let parsedTasks = JSON.parse(localStorage.getItem('tasks'))
            return parsedTasks
        })
    },

    updateDoneTasks: (id) => {
        allTasks.update(tasks => {
            let updatedTask = { ...tasks.find(t => t.id === id) }
            updatedTask.done = !updatedTask.done
            const taskIndex = tasks.findIndex(t => t.id === id)
            const updatedTasks = [...tasks]
            updatedTasks[taskIndex] = updatedTask
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            return updatedTasks
        })

        allTasks.update(tasks => {
            let parsedTasks = JSON.parse(localStorage.getItem('tasks'))
            return parsedTasks
        })
    },

    deleteTask: (id) => {
        allTasks.update(tasks => {
            const newTasks = tasks.filter(t => t.id !== id)
            localStorage.setItem('tasks', JSON.stringify(newTasks))
            return [...newTasks]
        })
    }
}

export default customTasks;