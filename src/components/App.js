import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='grid'>
      <header><h1>Header</h1></header>
      <aside className='sidebar-right'><h1>R Sidebar</h1></aside>
      <article><h1>Article</h1></article>
      <aside className='sidebar-left'><h1>L Sidebar</h1></aside>
      <footer><h1>Footer</h1></footer>
    </div>
  }
}

export default App
