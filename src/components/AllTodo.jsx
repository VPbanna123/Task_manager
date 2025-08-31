import { useState, useEffect } from "react"
import { TodoProvider } from "../context/TodoContext"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"

import { db, auth } from "../firebase/firebase.config"
import { 
  collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot 
} from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"

function AllTodo() {
  const [todos, setTodos] = useState([])
  const [user, setUser] = useState(null)

  // ✅ Track auth state
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribeAuth()
  }, [])

  // Add todo
  const addTodo = async (todo) => {
    if (!user) return
    const todosRef = collection(db, "users", user.uid, "todos")
    await addDoc(todosRef, { 
      ...todo, 
      completed: false, 
      createdAt: Date.now() 
    })
  }

  // Delete todo
  const deleteTodo = async (id) => {
    if (!user) return
    await deleteDoc(doc(db, "users", user.uid, "todos", id))
  }

  // Toggle complete
  const toggleComplete = async (id, completed) => {
    if (!user) return
    await updateDoc(doc(db, "users", user.uid, "todos", id), { completed: !completed })
  }

  // Update todo
  const updateTodo = async (id, todo) => {
    if (!user) return
    await updateDoc(doc(db, "users", user.uid, "todos", id), todo)
  }

  // Fetch todos in realtime
  useEffect(() => {
    if (!user) {
      setTodos([]) // clear if logged out
      return
    }

    const todosRef = collection(db, "users", user.uid, "todos")
    const unsubscribeTodos = onSnapshot(todosRef, (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setTodos(todosData)
    })

    return () => unsubscribeTodos()
  }, [user])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Your Task </h1>
          {user ? (
            <>
              <div className='mb-4'>
                <TodoForm />
              </div>
              <div className='flex flex-wrap gap-y-3'>
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center">Please login to see your tasks.</p>
          )}
        </div>
      </div>
    </TodoProvider>
  )
}

export default AllTodo
